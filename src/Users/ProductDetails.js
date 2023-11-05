import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import checkUserLogin from "./Userauth";
import "./ProductDetails.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
 

  const getSingleRecord = async () => {
    try {
      let single = await axios.get(
        `http://localhost:9000/products/${productId}`
      );
      if (single) {
        setProduct(single.data);
      } else {
        console.log("record not fetch");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const Addtocart = (productId) => {
    if(!checkUserLogin()){
        alert("First Login ");
        navigate('/register');
    }
    // console.log(productId);
    // console.log(checkUserLogin());
    axios.get(`http://localhost:9000/products/${productId}`)
    .then((res)=>{
        console.log(res.data);
        axios.post(`http://localhost:9000/carts`,{
            name : res.data.name,
            price : res.data.price,
            qty : res.data.qty,
            image : res.data.image,
            category : res.data.category,
            userId : checkUserLogin().id
        }).then((res)=>{
                alert("Product successfully add");
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })

}

  useEffect(() => {
    getSingleRecord();
  }, []);

   return (
    <div className="product-details-container">
    <div className="container">
      <div className="row">
        <h2 className="product-title">Product Details</h2>
        <div className="product-card">
          <div className="col-md-5">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="product-info">
              <h4 className="product-name">Name: {product.name}</h4>
              <hr />
              <h5 className="product-price">Price: {product.price}</h5>
              <hr />
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio.
              </p>
              <hr />
              <div>
                <div className="add-to-cart-button "onClick={ () => Addtocart(product.id) }>
                  <h6>Add to Cart</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
