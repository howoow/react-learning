import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {}

    render_calculator = () => {
        if (this.props.is_login) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/calculator">计算器</Link>
                </li>
            )
        }
        else {
            return ""
        }
    }

    render_user = () => {
        if (!this.props.is_login) {
            return (
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/calculator/login">登录</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator/register">注册</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link" style={{ cursor: "pointer" }}>{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ cursor: "pointer" }}>退出</a>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/calculator">Web</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/calculator/home">首页</Link>
                                </li>
                                {this.render_calculator()}
                            </ul>
                            {this.render_user()}
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;