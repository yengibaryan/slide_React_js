import React from 'react';
import Slide from "./components/slide"
import slideData from "./components/slideData"


import './App.css';

class  App extends React.Component {
  constructor(){
    super()
    this.state = {
      index : 0,
    }
  }
  changeSlide = (count) => {
    this.setState({
      index: count,
    });
  };
  nextSlide = ()=>{
    this.setState({
      index: this.state.index >  slideData.length - 2   ? this.state.index = 0 : this.state.index + 1 ,
    });
  };
  prevSlide = ()=>{
    this.setState({
      index: this.state.index  === 0 ? this.state.index = slideData.length - 1  : this.state.index - 1,
    });
  };

 render(){
   const { index } = this.state
  return (
    <div> 
       <Slide 
          slideData = {slideData}
          slideIndex = {index}
          changeSlide = {this.changeSlide}
          nextSlide = {this.nextSlide}
          prevSlide = {this.prevSlide }
         />
    </div>
  );
 }
}

export default App;
