import { Link } from 'react-router-dom'
import React from 'react'
import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">

        <title>project</title>
    
      <div className="desktop1-desktop1">
        <img
          alt="victoriashesUC0HZdUitWYunsplash113"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbK9QcYokW6olN78nWM6CRbPqe54OficWIw&usqp=C"
          className="desktop1-victoriashes-u-c0h-zd-uit-w-yunsplash1"
        />
        <img
          alt="Arrow245"
          src="https://www.spiceupthecurry.com/wp-content/uploads/2022/04/bang-bang-cauliflower-1.jpg"
          className="desktop1-arrow2"
        />
        <img
          alt="Ellipse116"
          src="https://www.spiceupthecurry.com/wp-content/uploads/2022/04/bang-bang-cauliflower-1.jpg"
          className="desktop1-ellipse1"
        />
        <img
          alt="Ellipse2211"
          src="https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/01/thali-economic-survey-1580461555.jpg"
          className="desktop1-ellipse2"
        />
        <span className="desktop1-text">
          <span>
          <Link to="/desktop9">Main courses</Link></span>
        </span>
        <img
          alt="Ellipse3213"
          src="https://spiceeats.com/wp-content/uploads/2020/07/Chicken-Hyderabadi.jpg"
          className="desktop1-ellipse3"
        />
        <img
          alt="Ellipse4217"
          src="https://www.cookclickndevour.com/wp-content/uploads/2018/09/kadai-vegetables-recipe-2.jpg"
          className="desktop1-ellipse4"
        />
        <span className="desktop1-text02">
          <span>
          <Link to="/desktop10">Rotti</Link></span>
        </span>
        <img
          alt="Ellipse5222"
          src="https://media.istockphoto.com/id/1296474411/photo/piece-of-sachertorte-sachr-cake-on-white-plate-top-view-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=4FL6ZEbWY-eqJDY8-pa5aeXKCuae6vT1D6_d1E5xMFI="
          className="desktop1-ellipse5"
        />
        <span className="desktop1-text04">
          <span>
          <Link to="/desktop7">Desserts</Link></span>
        </span>
        <span className="desktop1-text06">
          <span>
          <Link to="/desktop5">Starters</Link></span>
        </span>
        <span className="desktop1-text08">
          <span>
          <Link to="/desktop8">Gravy</Link></span>
        </span>
      </div>
    </div>
  )
}

export default Desktop1