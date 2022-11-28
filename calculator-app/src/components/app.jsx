import React, { Component } from 'react';
import NavBar from './navBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';


class App extends Component {
    state = {
        is_login: true,
        username: "wh",
    }
    render() {
        return (
            <React.Fragment>
                <NavBar is_login={this.state.is_login} username={this.state.username}></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home />}></Route>
                        <Route path='/calculator/home' element={<Home />}></Route>
                        <Route path='/calculator/calculator' element={this.state.is_login ? <Calculator /> : <Navigate replace to="/calculator/login" />}></Route>
                        <Route path='/calculator/login' element={this.state.is_login ? <Navigate replace to="/calculator/home" /> : <Login />}></Route>
                        <Route path='/calculator/register' element={this.state.is_login ? <Navigate replace to="/calculator/home" /> : <Register />}></Route>
                        <Route path='/calculator/404' element={<NotFound />}></Route>
                        <Route path='/calculator/*' element={<Navigate replace to="/calculator/404" />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default App;