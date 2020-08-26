import React, { Component } from 'react';
import './App.css';
import axios from '../axios-orders'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    id: 0,
    name: '',
    price: 0,
    quantityOnStock: 0
  }

  idChangedHandler = (event, id) => {
    this.setState({ id: parseInt(event.target.value) });
  }

  nameChangedHandler = (event, id) => {
    this.setState({ name: event.target.value });
  }

  princeChangedHandler = (event, id) => {
    this.setState({ price: parseInt(event.target.value) });
  }


  quantityChangedHandler = (event, id) => {
    const quantaty = this.state.quantityOnStock;
    this.setState({ quantityOnStock: parseInt(event.target.value) });
  }

  saveProduct = () => {
    var product = { ...this.state };
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post('/Product',  product)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  updateProduct = () => {
    axios.put('/product', this.state)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Id:
        </p>
          <input
            onChange={this.idChangedHandler}
            type="number" />
          <p>
            Name:
        </p>
          <input
            onChange={this.nameChangedHandler}
            type="text" />
          <p>
            Price:
        </p>
          <input
            onChange={this.princeChangedHandler}
            type="number" />
          <p>
            Quantity:
        </p>
          <input
            onChange={this.quantityChangedHandler}
            type="number"  />
          <button onClick={this.saveProduct}> Save </button>
          <button onClick={this.updateProduct}> Update </button>
        </header>
      </div>
    );
  }
}

export default App;
