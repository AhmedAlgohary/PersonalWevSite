import React , {Component} from 'react';
import './App.js' ;
import {BrowserRouter , Route} from'react-router-dom';
import Index from './Components/Index';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>

                    <NavBar />
                    <Route path = '/' exact component = {Index}  />
                    <Route path = '/contact' component = {Contact} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;





