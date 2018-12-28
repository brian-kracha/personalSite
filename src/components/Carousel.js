import React, { Component } from 'react'
import Gallery from './gallery.js'
import Arrows from './arrows.js'
import brian from '../images/brian.jpg'
import flatirons from '../images/flatirons.jpg'
import skiing from '../images/skiing.jpeg'
import snow from '../images/skiing.jpeg'
// const imgUrl =

export default class Carousel extends Component {
  constructor(props){
    super(props)
    this.imgUrl=[
      brian,
      flatirons,
      skiing,
      snow
    ]
    this.state = {
      currentIndex: 0
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = this.imgUrl.length - 1
    const {currentIndex} = this.state
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex : index
    })
    console.log(this.state.currentIndex)
  }

  nextSlide() {
    const lastIndex = this.imgUrl.length - 1
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
      <div className="carousel" width='100%'>
       <Arrows
         direction="left"
         clickFunction={ this.previousSlide }
         glyph="&#9664;" />

       <Gallery url={ this.imgUrl[this.state.currentIndex] } />

       <Arrows
         direction="right"
         clickFunction={ this.nextSlide }
         glyph="&#9654;" />
     </div>
    )
  }
}
