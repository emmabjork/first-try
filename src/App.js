import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Try from "./Component/Try";
import data from "./Data/data.json";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    }


  render() {
    return (
      <div>
        <h1>A heading to change something!</h1>
          <Try
          data={this.state.data}/>
      </div>
    );
  }
}

 



