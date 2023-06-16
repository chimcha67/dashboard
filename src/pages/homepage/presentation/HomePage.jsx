import React, { useEffect } from "react";
import ToggleSwitch from "./components/Productivity";
import Productivity  from './components/Productivity'
import Suptext from "./components/PostComponent";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {SiProgress} from 'react-icons/si'
import {MdDoneAll} from 'react-icons/md'
// import CloseIcon from '@material-ui/icons/Close'
import { Row, Col, Container} from "react-bootstrap";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import Switch from "./components/switch";
//import  Carousell from "./components/carousel";
import Carousell from "./components/carousel";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  // Title,
  // Tooltip,
  // Legend
} from 'chart.js'
//import { faker } from '@faker-js/faker';

import dataValues from "../controller/Helper";
import Searchbody from "./Searchbody";
import PostActionComp from "./components/PostActionComp";


// part for registering graph methods to be used in plotting graph

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  // Title,
  // Tooltip,
  // Legend
)


// homepage components

const HomePage = (ddata) => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [showMore, setShowMore] = useState(4)
  const [data2, setData2] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [input, setInput] = useState('')


// api  call part for searching

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


  const fetchData2 = async (values)=>{
  
      setLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
      // .then((response)=>response.json)
      // .then()
      const json2 = await res.json()
      const result = json2.filter((item)=>{
          return values && item.email.toLowerCase().includes(values)
      })
      setFilteredData(result)

      
     
  }

  // useEffect(()=>{
    
    
  // }, [])


  const handleFilter = (value)=>{
    // const searchedWord = event.target.value
    // const newFilter = data2.filter((value)=>{
    //       return value.title.toLowerCase().includes(searchedWord.toLowerCase())
    // })
    setInput(value)
    fetchData2(value)
  }

// graph data portion

const Data = {
  labels:['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun','Mon', 'Tue',],
  datasets:[{
    // label:'Research',
    lineTension: 0.5,
    data: [1, 2, 1.5, 2.2, 1.6, 3.2,2.5,3.4,2.4,2],
    backgroundColor:'tranparent',
    borderColor:'rgb(106, 195, 230)'
  },
  {
    //label:'Design',
    lineTension: 0.5,
    data: [2,2.5,1, 1.4,1,1.4, 1, 1.3, 1, 0.9],
    backgroundColor:'tranparent',
    borderColor:'rgb(146, 36, 146)'
  }
],
  
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  scales:{
    x:{
      grid:{
        display: true,
      }
    },
    y:{
      grid:{
        display: true,
      }
    }
  }
}

// checkbox function Portion

const [checked, setChecked] = useState([]);

const handleCheckAllChange = (e) => {
  if (e.target.checked) {
    const alltasks = data.map((c) => c.first_name);
    setChecked(alltasks);
  } else {
    setChecked([]);
  }
};

const handleCheckChange = (e, c) => {
  if (e.target.checked) {
    setChecked([...checked, c.first_name]);
  } else {
    setChecked(checked.filter((item) => item !== c.first_name));
  }
};


const [isToggled, setIsToggled] = useState(false)



  return ( <div>
     
      <Container >
        <Row>
        <Col lg={9} md ={9} >
          
              <div className="search-div ml-5">
                <div className="search-div2">
                    <input type="text" value={input} onChange={(e)=>handleFilter(e.target.value)} ddata={data2}  placeholder="search"/><AiOutlineSearch className="search-icon"/>
                    <select name="" id="select-date">
                      <option value="Monday">Moday, 6th June</option>
                      <option value="Monday">Tuesday, 7th June</option>
                      <option value="Monday">Wednesday, 8th June</option>
                      <option value="Monday">Thursday, 9th June</option>
                      <option value="Monday">Friday, 10th June</option>

                    </select>
                     <Switch  />
                </div>
                {/* <React.Fragment>
                <ToggleSwitch label="Notifications" />
                <ToggleSwitch label="Subscribe" />
               </React.Fragment> */}
              </div>
              <div className="overall-task-div">
              <div className="task-div">
                <Container>
                  <Row style={{position:'relative'}}>
                    <div className="div">
                    <div className="last-task-div">
                    <h3>Last tasks</h3>
                      <p><span>117 total</span>, proceed to resolve them</p>
                    </div>
                    <div className="divided-tasks">
                      <div className="sub-divided1">
                      <h3>96</h3> <p>Done</p>
                      </div>
                      <div className="sub-divided2">
                      <h3>23</h3> <p>In progress</p>
                      </div>

                    </div>
                    </div>
                    <hr style={{width:'51rem', position:'relative', left:'36px'}}/>
                   
                    <Col md={3} className="">
                
               
                      <div className="div1"><input type="checkbox" onChange={handleCheckAllChange}  checked={checked.length === data.length}  className="checkbox" /> <label htmlFor="">Name</label></div>
                    </Col>
                    <Col md={2} className="">
                      <label className="lbl2">Admin</label>
                    </Col>
                    <Col md={1} className="text-center">
                    <label className="lbl2 text-center">Members</label>
                    </Col>
                    <Col md={2} className="text-center">
                    <label className="lbl2 text-center">Status</label>
                    </Col>
                    <Col md={2} className="">
                    <label className="lbl2">Run time</label>
                    </Col>
                    <Col md={2} className="">
                    <label className="lbl2">Finish Date</label>
                    </Col>
                    <hr style={{width:'51rem', position:'relative', left:'36px'}}/>
                  </Row>
                  </Container>
                  
                {data.slice(0, showMore).map(user=>(
                    <div className="table-div">
                      <Container >
                  <Row >
                  <Col md={3} className="">
                 
                      <div className="div1"><input type="checkbox" onChange={(e)=> handleCheckChange(e,user)}  checked={checked.includes(user.first_name)} className="checkbox"/> 
                      <span style={{marginLeft:'10px'}}>{user.first_name} {user.last_name}</span>
                      </div>
                    </Col>
                    <Col md={2} className="d-flex ">
                      <div className="img-div-name " style={{position:'relative', left:'-10px',top:'15px', display:'flex'}}>
                        <img src={user.avatar}  alt=""  className="admin-img"/> <span style={{position:'relative', left:'8px', top:'3px'}}>{user.first_name}</span>
                      </div>
                    </Col>
                    <Col md={1} className="text-center ">
                    <span className="mem-num">{Math.floor(Math.random() * 100) + 10}</span>
                    </Col>
                    <Col md={2} className=" justify-content-left ">

                    <span className="status-icon">{user.id%2===0?<PostActionComp icon={MdDoneAll } className="done-status-icon" />  :<Suptext icon ={SiProgress} className="progress-status-icon"/>}</span>
                    </Col>
                    <Col md={2}>
                    <span className="runtime">{Math.floor(Math.random() * 10) + 2} hours</span>
                    </Col>
                    <Col md={2} >
                      <div style={{position:'absolute'}}>
                    <label className="" style={{position:'relative', top:'20px'}}>Finish Date</label>
                    </div>
                    </Col>
                   
                  </Row>
                  </Container>
                  </div>
  
                      
                    ))}
                 
              </div>
             
                  <div className="btn-div"> 
                   {
                      showMore < data.length? 
                      <button onClick={()=>setShowMore(showMore + 3)} className="show-btn mt-3">see more </button>: 
                      <button onClick={()=>setShowMore(showMore-6)} className="show-btn mt-3">show less</button>

                    }
                  </div>  
               </div>      
              <div className="main-pro-div">
                  <Row>
                    <Col md={4}>
                    <div className="productivity-div">
                     <div className="p-t-div">
                     <h3>Productivity</h3>
                      <div className="dot-div">
                        <div className="sub-dot-d">
                          <div className="dot1"/>
                          <p>Research</p>
                        </div>
                        <div className="sub-dot-d1">
                          <div className="dot2"/>
                          <p>Design</p>
                        </div>
                      </div>
                     </div>
                      <div className="p-d-div">
                          <select name="" id="select-date2">
                          <option value="Monday">01-06 June</option>
                          <option value="Tuesday">02-06 June</option>
                          <option value="Wednesday">03-06 June</option>
                          <option value="Thurday">04-06 June</option>
                          <option value="Friday">05-06 June</option>

                        </select>
                        <p>Date updates every three hours</p>
                    </div>

                      <Line data={Data} options={options} className="graph">

                      </Line>

                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="productivity-div2">
                      <Carousell/>
                    
                    </div>
                    </Col>
        
                </Row>
              </div> 
      <Searchbody filteredData={filteredData}/>
              
          </Col>
          
        </Row>
        
      </Container>
    </div>
  );
};

export default HomePage;
