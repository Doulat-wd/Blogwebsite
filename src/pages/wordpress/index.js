import React,{useState,useEffect} from "react";
import { collection,doc,getDoc,getDocs,getFirestore,onSnapshot} from "firebase/firestore";
import {getAuth,onAuthStateChanged} from "firebase/auth"

import { useNavigate } from "react-router-dom";
import {  query, where } from "firebase/firestore";
import "./wordpress.css"
import Navbar from "../../components/navbar";
import Worpdressimage from "./Wordpress.jpg"
import emptyCover from "./coverimage.png"
const Wordpress=()=>{
 // states
 let navigation=useNavigate()
 let db=getFirestore()
 let auth=getAuth()
let [getUid,setUid]=useState("")
let [GetDataPosts,SetDataPosts]=useState([])
let [GetDataPostsUid,SetDataPostsUid]=useState([])
let [GetDataPostsLength,SetDataPostsLength]=useState(0)
let allPostsMainArray=[]
let PostsMainArray=[]
let PendingMainArray=[]
let ApprovedMainArray=[]
let RejectedMainArray=[]

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
 GetDataPosts.map((v,i)=>{
     // console.log(v.uid)
     if(v.category==="Wordpress"&&v.status==="approved"){
   PostsMainArray.push(v)
  
      }
      
   
   })
return(
 <div>
     <Navbar/>
     
     <div id="ImageCourseDiv">
        <img src={Worpdressimage} alt="" />
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
export default Wordpress
