import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    // redirect to home
    this.props.history.push('/');
  }

  render() {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <button className="btn grey" onClick={this.handleClick}>
          Delete Post
        </button>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return(
      <div className="container">
        <h4>{post}</h4>
      </div>
    )
  }
}
// ownProps refers to the props of this Post component that is before 
// we attach additional props from redux store 
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}
// much like
// store.dispatch({type:'ADD_TODO', todo:{'buy milk}})
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

