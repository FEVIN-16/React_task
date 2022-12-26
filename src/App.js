import React from "react";
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products: []
    }
}
componentDidMount() {
    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then(res => res.json())
    .then(
        (products) => {
            this.setState({ products: products });
        },
        (error) => {
            alert(error);
        }
    )
}
  render() {
    return (
    <div>
    <h1 className="heading">Products</h1>
    <div className="box">
    <table className="box" cellPadding="3px" cellSpacing="5px" >
        <thead>
            <tr>
                <th className="grid-container">Product</th>
                <th className="grid-container">Price</th>
                <th className="grid-container">image</th>
                <th className="grid-container">type</th>
            </tr>
        </thead>

        <tbody>
            {this.state.products.map(product =>
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.image}</td>
                    <td>{product.type}</td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
    </div>);
  }
}

export default App;

