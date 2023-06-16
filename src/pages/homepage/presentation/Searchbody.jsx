import React from 'react'
import './searchbody.css'

const Searchbody = ({filteredData}) => {
  return (
    <div>
      {
                        filteredData.length !==0 && (filteredData.slice(0, 5).map((item, id)=>{
                          return(
                            <div key={id}>
                                <div className="trend">
                                  <div className="sub">
                                    <p> {item.email}</p>
                                  </div>
                                 
                                  {/* <span>{item.location}</span> 
                                  <h4>{item.heading}</h4>
                                  <span>{item.tweet}</span> */}
                                </div>
                            </div>
                          )
                        }))
                      }
    </div>
  )
}

export default Searchbody
