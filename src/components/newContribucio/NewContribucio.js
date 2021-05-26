import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';

import * as api from '../../helpers/api';
import { InputGroup, FormControl } from 'react-bootstrap';

class UserComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contribucio: []
    };
  }

  loadComments() {
    api.getUserComments()
      .then((response) => {
        
      });
  }

  componentDidMount() {
    this.loadComments();
  }

  render() {
    return (
      <div>
        <Navigation />
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
      </div>
    );
  }
}

UserComments.propTypes = {
  contribucios: React.PropTypes.array,
  liked_contribucios: React.PropTypes.array
};

export default UserComments;
