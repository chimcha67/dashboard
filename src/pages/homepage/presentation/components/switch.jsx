import React from 'react'
import './switch.css'
import names from 'classnames'
import {MdDoneAll} from 'react-icons/md'
import {BsPostcard} from 'react-icons/bs'
import {BsListTask} from 'react-icons/bs'


const Switch = () => {

    //const sliderNames = names('slider', {'rounded':rounded})
  return (
  <label className='switch1' style={{borderRadius:'20px'}}>
    <input type="checkbox" />
    <span  className='slider'>
    <p className='btn1'>
        <BsPostcard className='icon1'/> Card
      </p>
      <p className='btn2'>
        <BsListTask className= 'icon2'/> List
      </p></span> 
    {/* <span className='label' data-on = "Card" data-off="List">
     
    </span> */}
  </label>
  )
}

export default Switch;
