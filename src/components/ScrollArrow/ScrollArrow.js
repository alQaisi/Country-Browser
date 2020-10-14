import React,{useState} from 'react';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import './ScrollArrow.css';
const ScrollArrow=(props)=>{
    const [showScroll,setShowScroll]=useState(false);
    const {colorMode}=props;
    const checkScrollTop=()=>{
        if(!showScroll && window.pageYOffset>400){
            setShowScroll(true);
        }else if(showScroll && window.pageYOffset<=400){
            setShowScroll(false);
        }
    };
    const scrollTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    }
    window.addEventListener('scroll',checkScrollTop);
    return(
        <IoIosArrowDropupCircle className={`scrollTop ${colorMode}-arrow`} onClick={scrollTop} style={{display: showScroll ? 'block' : 'none'}}/>
    )
}
export default ScrollArrow;