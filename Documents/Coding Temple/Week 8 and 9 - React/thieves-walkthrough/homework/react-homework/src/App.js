import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import ToDoList from './ToDoList';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home/>
        <ToDoList/>
        <Footer/>
      </div>
    )
  }
}

