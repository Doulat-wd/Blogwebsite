import React from "react";
import { Homepage,Webdevelopment,Appdevelopment,Wordpress,Freelancing ,SinglePostPage,About} from "../../pages";
import {BrowserRouter,Route,Routes} from "react-router-dom"
const NavigationPage=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route element={<Homepage/>} path="/"/>
        <Route element={<Webdevelopment/>} path="/Webdevelopment"/>
        <Route element={<Appdevelopment/>} path="/Appdevelopment"/>
        <Route element={<Wordpress/>} path="/Wordpress"/>
        <Route element={<Freelancing/>} path="/Freelancing"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<SinglePostPage/>} path="/Singlepost/:id"/>
    </Routes>
    </BrowserRouter> 
)
}
export default NavigationPage