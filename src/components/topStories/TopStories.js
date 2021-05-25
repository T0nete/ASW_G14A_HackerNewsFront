import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import Story from '../story/Story';
import './TopStories.css';

import * as api from '../../helpers/api';

class TopStories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contribucios: [],
      liked_contribucios: []
    };
  }

  loadTopStoriesIds() {
    api.getContribucios()
      .then((response) => {
        const contribucios = response.data;
        this.setState({ contribucios });
        console.log(contribucios);
    });
  }


  loadLikedContribucios() {
    api.getLikedContribucios()
      .then((response) => {
        const liked_contribucios = response.data;
        this.setState({ liked_contribucios });
        //console.log(liked_contribucios);
    });
  }


  

  componentDidMount() {
    this.loadTopStoriesIds();
    this.loadLikedContribucios();
  }

  render() {
    return (
      <div>
          <Navigation />
          <ul>
            {this.state.contribucios.map(contribucio => 
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div>
                        <h3><a href={contribucio.url}>{contribucio.tittle}</a></h3>
                        <p>{contribucio.url}</p>
                        <p><span><img src="../descarga.png" ></img></span> {contribucio.like}</p>
                        <p>{contribucio.created_at}</p>
                        <a href={"/contribucios/"+contribucio.id}>Comments: {contribucio.comments.length}</a>
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

TopStories.propTypes = {
  contribucios: React.PropTypes.array,
  liked_contribucios: React.PropTypes.array
};

export default TopStories;
