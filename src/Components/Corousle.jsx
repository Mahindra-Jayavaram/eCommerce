// import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './nav.css'
export const NavCarousel = () => {
  const sliderSettings = {

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }

  const hotelCards = [
    {
      imageSrc: 'https://c1.wallpaperflare.com/preview/106/1005/114/beautiful-casual-countryside-daylight.jpg',

    },
    {
        imageSrc:"https://c1.wallpaperflare.com/preview/591/472/937/nature-landscape-man-fashion.jpg",
    },
    {
      imageSrc: 'https://previews.123rf.com/images/kuzmichstudio/kuzmichstudio1508/kuzmichstudio150800042/44183681-male-model-fashion-modern-clothes-in-the-urban-landscape-beauty-fashion-style-youth-men.jpg',

    },
    {
      imageSrc: 'https://www.textiletechnology.net/news/media/9/Denim-Jeans-Pexels-83363.jpeg',
    },
  ]

  return (
    <div style={{ width: '90%', margin: 'auto', border: '1px solid #ded9d9', background: '#fff', borderRadius: '0px 5px 5px' }}>

      <Slider  {...sliderSettings} style={{ width: '90%', margin: 'auto' }} >
        {
          hotelCards.map((card, i) => (
            <div key={i} style={{ display: 'block' }}>
              <img src={card.imageSrc} alt="" style={{ width: '80%', height: '323px', margin:"auto" }} />
            </div>
          ))
        }
      </Slider>
    </div>

  )
}