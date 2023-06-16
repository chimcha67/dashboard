import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {MdSpaceDashboard} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import {MdLocalLaundryService} from 'react-icons/md'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiChat} from 'react-icons/bi'
import {IoLogoFoursquare} from 'react-icons/io'
//import LocationOnIcon from '@mui/icons-material/LocationOn'
//import { ArrowDropDown } from '@mui/icons-material';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './layout.css'

const Layout = (props) => {


  const [page, setPage] = useState(1)
  const [data, setData] = useState([])



  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        
        const res = await fetch(`https://reqres.in/api/users?page={page}&per_page=1`)
        const json = await res.json()
        
        setData(pre=>[...pre, ...json.data])
      
      } catch (error) {
        console.log('error')
      }
    }
    fetchData()
  }, [page])

  return (
    <div  >
      <Container className="main-container">
        <Row>
        <Col md={3} className="  text-left mt-2">
           <div className="menu-col">
              <div className="logo">
                <IoLogoFoursquare/>
                <h3>logo</h3>
              </div>
              <hr />
              <ul >
                <div className="menu-list ">
                  
                

                  <a  href = "/" ><  MdSpaceDashboard className='icons'/><p>Dashboard</p></a>
                  <a  href = "/"><AiOutlineProject className='icons'/><p>Projects</p></a>
                  <a  href = "/task" className="menu1"><BsListTask className='icons'/><p>Task list</p></a>
                  <a  href = "/"><MdLocalLaundryService className='icons'/><p>Services</p></a>
                  <a  href = "/"><IoMdNotificationsOutline className='icons'/><p style={{display:'flex', position:'relative'}}>Notification <legend >4</legend></p></a>
                  <a  href = "/"><BiChat className='icons'/><p>Chat</p></a>
                </div>
              </ul>
            </div>
            {
            data.slice(0, 1).map((item)=>(
              <div className="user-div">
                <img src={item.avatar} alt="" />
                <p>{item.first_name} {item.last_name}</p>
                <span>{item.email}</span>
                <div className="dot"/>
              </div>
            ))
        }
        </Col>
        <Col md={9}>
        <div className="col-span-11">{props.children}</div>
        </Col>

        {
            data.map((item)=>(
              <div>
                <img src={item.avatar} alt="" />
              </div>
            ))
        }
        </Row>
       
      </Container>
   
    </div>
  );
};

export default Layout;
