import React from 'react';

// Because the router loads up Contact, Home, About it automatically 
// attatches extra information to the 'props' object
const Contact = (props) => {
  // console.log(props)
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)
  
  return(
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt expedita tempora laboriosam quae aliquam omnis aliquid error repudiandae ad itaque corporis tempore suscipit, pariatur dolorum commodi, recusandae veritatis dolor?</p>
    </div>
  )
}

export default Contact