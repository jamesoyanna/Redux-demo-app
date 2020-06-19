import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions'

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            title : '',
            body: ''
        }
    }

  handlaChange = (e)=>{
      const {name, value} = e.target
      this.setState({[name]:[value]})
  }
   
    handleSubmit = (e)=>{
e.preventDefault();

const post  = {
    title: this.state.title,
    body: this.state.body
}

this.props.createPost(post);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title:</label> <br />
                    <input type="text" name="title" onChange = {this.handlaChange} value={this.state.title}></input>
                </div>
                <br />
                <div>
                    <label>Body:</label> <br />
                    <textarea name="body" onChange={this.handlaChange} value={this.state.body}></textarea>
                </div>
                <br />
                <button type="submit" >Submit</button>
            </form>
        );
    }
}

Posts.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect (null, {createPost})(Posts);