import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';

import * as api from '../../helpers/api';



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
            

        </div>
        );
    }
}

UserProfile.propTypes = {
contribucios: React.PropTypes.array,
liked_contribucios: React.PropTypes.array
};

export default UserProfile;