import React from 'react'

function CarouselSlide({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        minWidth: '100%',
        marginLeft: '0',
        objectFit: 'fit',
      }}
    />
  )
}

export default CarouselSlide

// objectFit: 'cover',