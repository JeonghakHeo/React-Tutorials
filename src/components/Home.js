import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// npm install axios 
// It basically allows us to go out and fetch data from external source
// Use lifecycle hooks to go out and grab data using axios

// To use lifecycle hooks we need to convert functional component to calss-based component
// function components can't use lifecycle hooks
class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
  }

  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}
export default Home

