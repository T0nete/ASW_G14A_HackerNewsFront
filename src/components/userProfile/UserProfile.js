import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';

import * as api from '../../helpers/api';
import { Card, Button } from 'react-bootstrap';



class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        user: []
        };
    }

    loadUserId() {
        api.getUserId()
        .then((response) => {
            const user = response.data;
            this.setState({ user });
            console.log(user);
        });
    }

    componentDidMount() {
        this.loadUserId();
    }

    render() {
        return (
        <div>
            <Navigation />
            <div className="center">
                <h3>{this.state.user.username}</h3>
                <p>Created at: {this.state.user.created_at}</p>
                <p>Karma: {this.state.user.id}</p>
                <Button>Update Userename</Button>
            </div>
            
            <div>
                <Button href="/usercontribucios">Contribucions</Button>
                <Button href="/comments">Comments</Button>
                <Button href="/contribucioslikedid">Liked Contribucios</Button>
                <Button href="/commentsliked">Liked Comments</Button>
            </div>
        </div>
        );
    }
}

UserProfile.propTypes = {
contribucios: React.PropTypes.array,
liked_contribucios: React.PropTypes.array
};

export default UserProfile;