import React, { Component } from 'react';

//state状态为空的组件可以设置为无状态组件

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        NavBar <span>Boxes Count: {props.boxesCount}</span>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
}
 
export default NavBar;