import React,{useState,useEffect} from "react";
import { collection,doc,getDoc,getDocs,getFirestore,onSnapshot} from "firebase/firestore";
import {getAuth,onAuthStateChanged} from "firebase/auth"
import Appdevelpmentimage from "./the-complete-guide-to-mobile-app-development-2021.png"
import { useNavigate } from "react-router-dom";
import {  query, where } from "firebase/firestore";
import emptyProfile from "./download.png"
import "./appdevelopment.css"
import Navbar from "../../components/navbar";
import emptyCover from "./coverimage.png"
const Appdevelopment=()=>{
  // states
  let navigation=useNavigate()
  let db=getFirestore()
  let auth=getAuth()
  let [GetDataPosts,SetDataPosts]=useState([])
  let [GetDataPostsUid,SetDataPostsUid]=useState([])
  let [GetDataPostsLength,SetDataPostsLength]=useState(0)
  let allPostsMainArray=[]
  let PostsMainArray=[]
  let PendingMainArray=[]
  let ApprovedMainArray=[]
  let RejectedMainArray=[]
  let [getUid,setUid]=useState([])
let allUsersMainArray=[]
let UserStore=[]

  // states
  useEffect(()=>{
      const Allusersdata=onSnapshot(collection(db,"posts"),(allUsers)=>{
          allPostsMainArray=[]
          allUsers.forEach((singleLoopUsers)=>{
            allPostsMainArray.push(singleLoopUsers.data())
            SetDataPosts(allPostsMainArray)
        
          })
          })
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
      if(v.category==="AppDevelopment"&&v.status==="approved"){
    PostsMainArray.push(v)
   
       }
       
    
    })
    // console.log(GetUid)
getUid.map((v,i)=>{
  
    UserStore.push(v)
  
})
return(
  <div>
      <Navbar/>
      
      <div id="ImageCourseDiv">
        <img src={Appdevelpmentimage} alt="" />
     </div>
      <div id="MainPostDivAll">
   {PostsMainArray.map((v,i)=>{
 return(
  <div key={i} id="MainPostInnerDiv" 
  onClick={()=>navigation(`/Singlepost/${v.title}`)}
  >
    <img id="MainPostImage" src={v.imageUrl ===""?emptyCover:v.imageUrl} alt="" />
  <h1 id="MainPostTitle">{v.title}</h1>
  <p id="MainPostDesciption">{v.description.slice(0,190) }{v.description.length>190&&"..."}</p>
  <p id="MainPostCategory1">Catergory: <span id="MainPostCategory">{v.category}</span></p>
  

  </div>
 )
   })}
  </div>
  </div>
)
}
export default Appdevelopment