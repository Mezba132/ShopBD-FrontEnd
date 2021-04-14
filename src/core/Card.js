import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from '../core/ShowImage'
 
const Card = ({product}) => {
    return (
        <div className="col-3 mb-3">
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <ShowImage item={product} url="products"/>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.sold}</p>
                    <p>{product.createdAt}</p>
                    <Link to="/">
                        <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                             View Product
                        </button>
                    </Link>
                    <button className="btn btn-outline-warning mt-2 mb-2">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;