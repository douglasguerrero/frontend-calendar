import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

class App extends Component {
    
    constructor(props) {
        super(props);
    };

    render () {
        return (
        	<div>
                Initial
            </div>
        )
    }
}

export default connect(state => state)(App);