import React from 'react'
import './DonorCarousel.css'

export default function DonorCarousel() {
  return (
    <div className="carousel-container">
      <h3 className="doners-text">MAJOR DONORS</h3>
      <img
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/AidsInst_vcypsl.png"
        alt="aids-institute"
      />
      <img
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/viacom_gziix6.png"
        alt="viacom-cbs"
      />
      <img
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/eltonJohn_zrrmb1.png"
        alt="elton-john-aids-foundation"
      />
      <img
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598306691/Trinity-Place-Shelter/HomePage/tudor_dgayqt.png"
        alt="james-tudor-foundation"
      />
      <img
        style={{ zIndex: '100' }}
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1597512463/Trinity-Place-Shelter/HomePage/Seal_of_transparancy_niagnw.png"
        alt="seal-of-transparency"
      />
    </div>
  )
}
