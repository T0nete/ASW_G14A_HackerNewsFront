import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';

import * as api from '../../helpers/api';

class UserComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  loadComments() {
    api.getrUserLikedComments()
      .then((response) => {
        const comments = response.data;
        this.setState({ comments });
        console.log(response.data);
      });
  }
  
  //const url = "https://hacker-news-g14a.herokuapp.com";
  
  /*
  fetch(url, {
    method: GET,
    headers: {
      authorization: youKEY,
      Accept: 'aplication/json',
    },
  });*/

  componentDidMount() {
    this.loadComments();
  }

  render() {
    return (
      <div>
          <Navigation />
          <ul>
            {this.state.comments.map(comment => 
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div>
                          <h3>{comment.content}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
          </ul>
          
      </div>
    );
  }
}

UserComments.propTypes = {
  contribucios: React.PropTypes.array,
  liked_contribucios: React.PropTypes.array
};

export default UserComments;
