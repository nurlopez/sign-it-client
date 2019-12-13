
import React, { Component } from 'react';
// import resourcesService from '../lib/resources-service'; // IMPORT functions for axios requests to API
import ResourceList from '../components/resources/ResourceList'


// import { Link } from 'react-router-dom';

export class Resources extends Component {
    render() {
        return (
            <div>
            <h1>Resources</h1>
            <ResourceList />
            </div>
        )
    }
}

export default Resources
