import React,{useState,useEffect} from "react";
import { collection,doc,getDoc,getDocs,getFirestore,onSnapshot,deleteDoc} from "firebase/firestore";
import {getAuth,onAuthStateChanged} from "firebase/auth"
import { Navbar ,BasicGrid} from "../../components";
import { useNavigate } from "react-router-dom";
import {  query, where,updateDoc } from "firebase/firestore";
import EmptyCoverImage from "./coverimage.png"
import db from "../../config/firebase"
import { useParams } from "react-router-dom";
import { Await } from "react-router-dom";
import CrossImage from "./close.png"
import emptyProflie from "./download.png"
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
import "./singlepost.css"
import { useStore } from "react-redux";
const SinglePostPage=()=>{
let db=getFirestore()
let params=useParams()

  let navigation=useNavigate()
 let auth=getAuth()
let [GetUid,setUid]=useState([])
let [GetDataPosts,SetDataPosts]=useState([])
let [checkUid,setCheckuid]=useState()
let allPostsMainArray=[]
let allUsersMainArray=[]
let PostsMainArray=[]
let UserStore=[]
let [Getposition,setPosition]=useState("none")
let [UserName,SetUsername]=useState("")
let [UserNamePic,SetUsernamePic]=useState("")
  
useEffect(()=>{
 
 
// 
const Allusersdata=onSnapshot(collection(db,"posts"),(allUsers)=>{
  allPostsMainArray=[]
  allUsers.forEach((singleLoopUsers)=>{
    allPostsMainArray.push(singleLoopUsers.data())
    SetDataPosts(allPostsMainArray)
 
  })
  })

// 
},[auth])
useEffect(()=>{
 
 
  // 
  const AllusersInfodata=onSnapshot(collection(db,"users"),(allUsersInfo)=>{
    allUsersMainArray=[]
    allUsersInfo.forEach((singleLoopUsers1)=>{
      allUsersMainArray.push(singleLoopUsers1.data())
      setUid(allUsersMainArray)
  
    })
    })
  
  // 
  },[auth])
GetDataPosts.map((v,i)=>{
  // console.log(v.uid)
  if(v.title===params.id){
PostsMainArray.push(v)

 
  }

})
// console.log(GetUid)
GetUid.map((v,i)=>{
  if(v.uid===PostsMainArray[0].uid){
    UserStore.push(v)
  }
})

return(
  <div>
    <Navbar/>
   
    <div id="singleMainDiv">
    
    {PostsMainArray.map((v,i)=>{
   return(
    
    <div key={i} id="SinglePostInnerDiv">
     <img id="SinglePostImage" src={v.imageUrl===""?EmptyCoverImage:v.imageUrl} alt="" />

       <div>
        {UserStore.map((v,i)=>{
          return(
            <div key={i} id="ProfileShowing">
              <img src={v.profileImage===""?emptyProflie:v.profileImage} alt="" />
              <h1>{`${v.firstname} ${v.lastname}`}</h1>
            </div>
          )
        })}
      </div>
     
    <div id="SingleConditionDiv">
        <h1>Catergory: {v.category}</h1>
        <h1>Status: {v.status}</h1>
    </div>
    <h1 id="SinglePostTitle">{v.title}</h1>
    <p id="SinglePostDesciption">{v.description}</p>
    
    </div>
   )
     })}
    </div>
  </div>
)
}
export default SinglePostPage