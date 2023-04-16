import React from "react";
import "./about.css"
import { Navbar } from "../../components";
import Webdevelopment from "./web-development-image.png";
import Appdevelopment from "./the-complete-guide-to-mobile-app-development-2021.png";
import Wordpress from "./Wordpress.jpg";
import Freelancing from "./RemoteMarketingJobs-1024x512.png";
const About =()=>{
    return(
        <div>
<Navbar/>
            <div id="InnerdivAbout">
                <h1 id="Aboutus">About Us</h1>
                <p className="ParagraphAbout">Are you looking to learn more about computers and technology? Whether you're a beginner or an experienced user, there are a variety of computer courses available to help you enhance your skills and knowledge.</p>
                <img src={Webdevelopment} alt="" className="ImagesAbout"/>
                <p className="ParagraphAbout">Computer courses cover a wide range of topics, from basic computer skills like typing and using the internet, to more advanced topics like programming, web development, and cybersecurity. There are also courses available for specific software applications, such as Microsoft Excel, Photoshop, or QuickBooks.</p>
<p className="ParagraphAbout">Many computer courses are offered online, making it easy to learn from anywhere at any time. Online courses offer flexibility and convenience, as you can work at your own pace and schedule. They also often provide interactive learning materials and assessments to help you track your progress.</p>
<img src={Appdevelopment} alt="" className="ImagesAbout"/>
 
 <p className="ParagraphAbout">In addition to online courses, there are also in-person courses available at community colleges, vocational schools, and universities. These courses offer hands-on training and opportunities to interact with instructors and other students.</p>
<img src={Wordpress} alt="" className="ImagesAbout"/>
 
 <p className="ParagraphAbout">Whether you're looking to advance your career, improve your skills for personal use, or just learn something new, there are plenty of computer courses available to meet your needs. Take the first step in enhancing your computer skills and enroll in a course today!</p>
<img src={Freelancing} alt="" className="ImagesAbout"/>
        
            </div>
        </div>
    )
}
export default About