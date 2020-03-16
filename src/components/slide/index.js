import React from "react"

import "./index.css"

class Slide extends React.Component{
   constructor(){
       super()
       this.state = {

       }
   }
   render(){
       const{ slideIndex, slideData, changeSlide, nextSlide, prevSlide } =  this.props
       return(
         <div>
        {slideData.length - 1}
        <div className="slide-contain">
          <div>
            <img src={slideData[slideIndex].image} alt={slideData[slideIndex].alt}/>
            <p>{slideData[slideIndex].text}</p>
            <p>{slideIndex}</p>
          </div>
        </div>
         <div  className="pagation">
           <button onClick={prevSlide}>prev</button>
           {slideData.map((item, index)=>{
           return(
            <div  key={index}>
               <img 
                  src={item.image} 
                  onClick={()=>changeSlide(index)}
                  className = {  slideIndex === index ? "active" : ""}
                  />
            </div>
           )
        })}
           <button onClick={nextSlide}>next</button>
           </div>  
        {this.state.num} 
         </div> 
       )
   }
}
export default Slide