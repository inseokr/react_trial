import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product"
import productsData from "./vschoolProducts"

class App extends Component {

  constructor() {
    super()
    this.state = {answer: "Yes"}
  }

  render() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

    return (
      <div>
        <div>
          {productComponents}
        </div>
        <div>
          <h1>Is state important to know? {this.state.answer}</h1>
        </div>
      </div>
    );   
  }
}

export default App;
