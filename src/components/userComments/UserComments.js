import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';

import * as api from '../../helpers/api';

class UserComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  loadComments() {
    api.getUserComments()
      .then((response) => {
        const comments = response.data;
        this.setState({ comments });
        console.log(response.data);
      });
  }

  componentDidMount() {
    this.loadComments();
  }

  render() {
    return (
      <div>
          <Navigation />
          
          
          
      </div>
    );
  }
}

UserComments.propTypes = {
  contribucios: React.PropTypes.array,
  liked_contribucios: React.PropTypes.array
};

export default UserComments;
