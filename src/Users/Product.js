import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Product.css'

const Product = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [highprice, setHighprice] = useState("HighlowTo");
  const [lowprice, setlowprice] = useState("LowToHigh");

  const handleSort = (order) => {
    if (order === "HighlowTo") {
      setProduct([...product].sort((a, b) => a.price - b.price));
    } else {
      setProduct([...product].sort((a, b) => b.price - a.price));
    }
    setHighprice(order);
  };

  const handleLow = (order) => {
    if (order === "LowToHigh") {
      setProduct([...product].sort((a, b) => b.price - a.price));
    } else {
      setProduct([...product].sort((a, b) => a.price - b.price));
    }
    setlowprice(order);
  };

  const allProduct = () => {
    axios
      .get(` http://localhost:9000/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const allCategory = () => {
    axios
      .get('http://localhost:9000/category')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const categoryFilter = (categoryName) => {
    if (categoryName.toLowerCase() === 'all') {
      allProduct();
    } else {
      axios
        .get(`http://localhost:9000/products?category=${categoryName}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

 
  useEffect(() => {
    allProduct();
    allCategory();
  }, []);
  return (
    <>
     <div>
      <div className="category-buttons text-center">
        {category.map((cat, index) => (
          <button
            key={index}
            onClick={() => categoryFilter(cat.category_name)}
          >
            {cat.category_name}
          </button>
        ))}
        <button onClick={() => categoryFilter('all')}>All</button>
      </div>
      <div className="product-list">
        {product.map((productItem, index) => (
          <div key={index} className="product-item">
            <p>{productItem.description}</p>
          </div>
        ))}
      </div>
    </div>

      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <ul className="list-group list-group-flush">
                <>
                  <li className="list-group-item p-3">
                    <button
                      class="btn  btn-outline-secondary w-100"
                      onClick={() => handleSort()}
                    >
                      Price High to Low
                    </button>
                  </li>
                  <li className="list-group-item p-3">
                    <button
                      class="btn  btn-outline-secondary w-100"
                      onClick={() => handleLow()}
                    >
                      Price Low To High
                    </button>
                  </li>
                </>
              </ul>
            </div>
          </div>

          <div className="col-lg-9 row">
            {product.map((val) => {
              return (
                <div className="col-lg-4 pb-3">
                  <div
                    className="card"
                    style={{ width: "18rem", padding: "15px" }}
                  >
                    <img
                      style={{ height: "200px", objectFit: "contain" }}
                      src={val.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Name :- {val.name}</h5>
                      <hr />
                      <h5 className="card-title">Price :- {val.price}</h5>
                      <div className="btn btn-primary w-100 mt-2">
                        <Link to={`/productDetails/${val.id}`}>
                          <h6 style={{ color: "white" }}>View More</h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
