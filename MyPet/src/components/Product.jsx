import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Product = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/products')

        return await res.json()
    }

    useEffect(() => {
        fetchProducts().then((res) => {
            setProducts(res)
        })
    }, [])

    const cardItem = (item) => {
        return (
            <NavLink className="card my-5 py-4" style={{ width: "18rem" }} to={`/products/${item.id}`}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">{item.price} UAH</p>
                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </NavLink>
        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products for your pet!</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {products.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product;