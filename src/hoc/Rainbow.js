import React from 'react';

// creating customized own higher oder component to randomize text color
// much like "withRouter"
const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'orange', 'blue', 'green',' yellow'];
  const randomColour = colours[Math.floor(Math.random() * 5)]; // random integers between 0 - 5 to get a random colour
  const className = randomColour + '-text' // for materialize class

    return (props) => {
      return(
        <div className={className}>
          <WrappedComponent {...props}/>
        </div>
      )
    }

}

export default Rainbow