import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';

import * as api from '../../helpers/api';
import { Container } from 'react-bootstrap';
/*
class UserComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contribucio: [],
      title: '',
      url: '',
      texto: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  loadComments() {
    api.getUserComments()
      .then((response) => {
        
      });
  }

  componentDidMount() {
    this.loadComments();
  }

  handleChange(event) {
    this.setState({title: event.target.title});
  }

  render() {
    return (
      <div>
        <Navigation />

        
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label> Name:<input type="text" name="title"  title={this.state.title} onChange={this.handleChange} /></label>
            
            <label> Url:<input type="text" name="url" /></label>

            <label> Texto:<input type="text" name="texto" /></label>
            <input type="submit" value="Submit" />
          </form>
          {console.log(this.state.title)}
        </div>
        

          
        
      </div>
    );
  }
}

UserComments.propTypes = {
  contribucios: React.PropTypes.array,
  liked_contribucios: React.PropTypes.array
};

export default UserComments;*/

class UserComments extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', url: '', texto: ''};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }



  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  


  handleSubmit(event) {
    alert(this.state.title + ' ' + this.state.url);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navigation />

        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.title} {this.state.url} {this.state.texto}</h1>
          <p>
            Name:
            <input type="text" name="title" onChange={this.handleChange} />
          </p>
          <label>
            Url:
            <input type="text"  name="url" onChange={this.handleChange} />
          </label>
          <label>
            Texto:
            <input type="text"name="texto" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
     

      
    );
  }
}

export default UserComments;