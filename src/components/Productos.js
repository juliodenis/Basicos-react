import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class Productos extends Component {
    state = {
        productos: []
    }

    componentDidMount() {
        console.log(1);
        this.setState({
            productos: [{
                id: 1,
                name: 'Camisa ReactJS',
                precio: 30
            },
            {
                id: 2,
                name: 'Camisa VueJS',
                precio: 30
            },
            {
                id: 3,
                name: 'Camisa AngularJS',
                precio: 30
            },
            {
                id: 4,
                name: 'Camisa NodeJS',
                precio: 30
            }]
        
        })
    }
    UNSAFE_componentWillMount() {
        console.log(2);
    }
    UNSAFE_componentWillUpdate() {
        console.log(3);
    }
    componentWillUnmount() {
        console.log(4);
    }
    render() {
        console.log(5);
        const {productos} = this.state;
        return (
            <Fragment>
                <h1> Lista de productos </h1>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                    producto={producto}
                        
                    />
                ))}
            </Fragment>
         );
    }
}

export default Productos;