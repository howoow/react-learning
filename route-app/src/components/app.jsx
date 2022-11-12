import React, { Component } from 'react';
import NavBar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import WebContent from './webContent';
import NotFound from './notFound'
import { Routes, Route, Navigate} from 'react-router-dom';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/linux' element={<Linux />}>
                            <Route path='homework' element={<h4>homework的内容</h4>}></Route>
                            <Route path='terminal' element={<h4>terminal的内容</h4>}></Route>
                        </Route>
                        <Route path='/django' element={<Django />}></Route>
                        <Route path='/web' element={<Web />}></Route> 
                        <Route path='/web/content' element={<WebContent />}></Route> 
                        <Route path='/404' element={<NotFound />}></Route> 
                        <Route path='*' element={<Navigate replace to={"/404"}/>}></Route> 
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;