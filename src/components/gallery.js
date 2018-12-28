import React, { Component } from 'react'

const Gallery = ({url}) => {
  const styles = {
    background: `url(${url})`,
    width:'100%',
    height:400,
    zIndex:10,
    backgroundSize: 'cover',
    backgroundPostion: 'center'
  }

  return (
    <div className="gallery" style={styles}>
    </div>
  )
}


export default Gallery
