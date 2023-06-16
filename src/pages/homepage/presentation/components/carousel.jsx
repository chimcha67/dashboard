import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carousel.css";
import { useEffect, useState } from "react";
import image from './istockphoto-1355030292-612x612.jpg'
import {BiMessageDetail} from 'react-icons/bi'
import {BsFileBreak} from 'react-icons/bs'





const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];





function Carousell() {



const [data, setData] = useState([])
const [page, setPage] = useState(1)
const [totalPage, setTotalPage] = useState(0)
const [loading, setLoading] = useState(false)


  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        setLoading(true)
        const res = await fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)
        const json = await res.json()
        setLoading(false)
        setData(pre=>[...pre, ...json.data])
        setTotalPage(json.total_pages)
      } catch (error) {
        console.log('error')
      }
    }
    fetchData()
  }, [page])

  const date = new Date();


  return (
    <>
      <h1 style={{ textAlign: "center", color:'#fff' }}></h1>
      <p className="p-header">Projects in progress:</p>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
       
        
          
          <Item>

             <div className="c-header-d">
              <div className="feedback">
                <p>FeedBack</p>
              </div>
              <div className="blog">
                  <p>Blog</p>
              </div>
              <div className="design-system">
                  <p>Design System</p>
              </div>
              </div>
              <p className="p-body">Lorem ipsum dolor sit, amet consectetur <br />
              <span className="date-span">{date.getDate()}. {date.getMonth()}. {date.getFullYear()}</span>
              </p>
              <div className="user-img-div">
              <img src={image} alt="" className="img1"/>
              <img src={image} alt="" />
              <img src={image} alt="" className="img3"/>
              <div className="icon-div">
                <div className="m-div">
                  <BiMessageDetail className="m-icon"/>
                  <p>12 comments</p>
                </div>
                <div className="f-div">
                  <BsFileBreak className="f-icon"/>
                  <p>0 files</p>
                </div>
              </div>
              </div>

          </Item>
          <Item>

             <div className="c-header-d">
              <div className="feedback">
                <p>FeedBack</p>
              </div>
              <div className="blog">
                  <p>Blog</p>
              </div>
              <div className="design-system">
                  <p>Design System</p>
              </div>
              </div>
              <p className="p-body">Lorem ipsum dolor sit, amet consectetur <br />
              <span className="date-span">{date.getDate()}. {date.getMonth()}. {date.getFullYear()}</span>
              </p>
              <div className="user-img-div">
              <img src={image} alt="" className="img1"/>
              <img src={image} alt="" />
              <img src={image} alt="" className="img3"/>
              <div className="icon-div">
                <div className="m-div">
                  <BiMessageDetail className="m-icon"/>
                  <p>12 comments</p>
                </div>
                <div className="f-div">
                  <BsFileBreak className="f-icon"/>
                  <p>0 files</p>
                </div>
              </div>
              </div>

          </Item>
          <Item>

             <div className="c-header-d">
              <div className="feedback">
                <p>FeedBack</p>
              </div>
              <div className="blog">
                  <p>Blog</p>
              </div>
              <div className="design-system">
                  <p>Design System</p>
              </div>
              </div>
              <p className="p-body">Lorem ipsum dolor sit, amet consectetur <br />
              <span className="date-span">{date.getDate()}. {date.getMonth()}. {date.getFullYear()}</span>
              </p>
              <div className="user-img-div">
              <img src={image} alt="" className="img1"/>
              <img src={image} alt="" />
              <img src={image} alt="" className="img3"/>
              <div className="icon-div">
                <div className="m-div">
                  <BiMessageDetail className="m-icon"/>
                  <p>12 comments</p>
                </div>
                <div className="f-div">
                  <BsFileBreak className="f-icon"/>
                  <p>0 files</p>
                </div>
              </div>
              </div>

          </Item>
         
        </Carousel>
      </div>
    </>
  );
}

export default Carousell;





// import React, { useState } from "react";
// //import { CarouselItem } from "./carouselitem"; 
// import './carousel.css'
// import items  from "../../controller/items";
// import {ImRadioChecked} from 'react-icons/im'
// import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";


// export const Carousel = () => {
 
//     return(<div>
//        <MDBCarousel showControls touch={false}>
//       <MDBCarouselItem
//         className='w-50 d-block'
//         itemId={1}
//         src='https://mdbootstrap.com/img/new/slides/041.jpg'
//         alt='...'
//       />
//       <MDBCarouselItem
//         className='w-50 d-block'
//         itemId={2}
//         src='https://mdbootstrap.com/img/new/slides/042.jpg'
//         alt='...'
//       />
//       <MDBCarouselItem
//         className='w-50 d-block'
//         itemId={3}
//         src='https://mdbootstrap.com/img/new/slides/043.jpg'
//         alt='...'
//       />
//     </MDBCarousel>
      
//     </div>
//   );
// };