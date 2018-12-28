import React, { Component } from 'react'

const Gallery = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize:'cover',
    width:'100%',
    height:400,
    zIndex:10,
  }

  return (
    <div className="gallery" style={styles}>
    </div>
  )
}


export default Gallery
