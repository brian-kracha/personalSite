import React, { Component } from 'react'

const Gallery = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    width:300,
    height:350,
    zIndex:10,
    // backgroundSize: 'cover',
    // backgroundPostion: 'center'
    
  }

  return (
    <div className="gallery" style={styles}></div>
  )
}


export default Gallery
