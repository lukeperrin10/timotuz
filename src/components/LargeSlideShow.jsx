import React from 'react'
import ReactBnbGallery from 'react-bnb-gallery'

const LargeSlideShow = ({ images, open, setSlideShow }) => {
  return (
    <ReactBnbGallery
      show={open}
      photos={images}
      zIndex={2000}
      onClose={() => setSlideShow(false)}
     
    />
  )
}

export default LargeSlideShow
