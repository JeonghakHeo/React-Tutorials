import React, { Component } from 'react';

// we automatically get props in class-based components
// when the component is being used as a route like in 
// App.js 
class Post extends Component {
  state = {
    id: null
  }
  componentDidMount(){
    // console.log(this.props);
    let id = this.props.match.params.post_id;
    this.setState({
      id: id
    })
  }
  render(){
    return(
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    )
  }
}

export default Post;
