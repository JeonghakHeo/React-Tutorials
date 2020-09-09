import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from'../pokeball.png';
import { connect } from 'react-redux';
// need to connect this component to our redux store (central data store)
// need to import a higher order component from the library so we can use it to connect redux

// npm install axios 
// It basically allows us to go out and fetch data from external source
// Use lifecycle hooks to go out and grab data using axios

// To use lifecycle hooks we need to convert functional component to class-based component
// function components can't use lifecycle hooks
class Home extends Component {
  render(){
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball" />  
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
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
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
// connect is a function that returns a higher order component then it wraps Home
// so it connects Home to our redux store