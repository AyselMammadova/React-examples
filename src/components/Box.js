import React, { Component } from 'react';
import logo from '../logo.svg';

 class Box extends Component {
    render() {
        return (
            <div className="box-cat col-md-4" style={{height: '400px'}}>
                <a href="{url}" className="d-flex align-items-center justify-content-center height-100">
                    <div className="img-wrap">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="box-desc">
                        <h4>Title</h4>
                    </div>
                </a>
            </div>
        )
    }
}

export default Box;
