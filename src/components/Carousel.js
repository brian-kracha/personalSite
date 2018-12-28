import React, { Component } from 'react'
import Gallery from './gallery.js'
import Arrows from './arrows.js'
export default class Carousel extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentIndex: 0
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = imgUrl.length - 1
    const {currentIndex} = this.state
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex : index
    })
    console.log(this.state.currentIndex)
  }

  nextSlide() {
    const lastIndex = imgUrl.length - 1
    const { currentIndex } = this.state
    const shouldResetIndex = currentIndex === lastIndex
    const index =  shouldResetIndex ? 0 : currentIndex + 1

    this.setState({
      currentIndex: index
    })
    console.log(this.state.currentIndex)
  }

  render(){
    return(
      <div className="carousel">
       <Arrows
         direction="left"
         clickFunction={ this.previousSlide }
         glyph="&#9664;" />

       <Gallery url={ imgUrl[this.state.currentIndex] } />

       <Arrows
         direction="right"
         clickFunction={ this.nextSlide }
         glyph="&#9654;" />
     </div>
    )
  }
}
const imgUrl= [
  '../src/images/brian.jpg',
  '../images/flatirons.jpg',
  '../images/skiing.jpg',
  '../images/snow.jpg'
]
