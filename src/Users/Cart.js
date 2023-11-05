import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Userauth from "./Userauth";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);

  const deleteRecord = (val) => {
    axios
      .delete(`http://localhost:9000/carts/${val}`)
      .then((res) => {
        alert("cart successfully delete");
        getAllCart();
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const incrementQty = (productId) => {
    let updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const newQty = item.qty === 0 ? 1 : item.qty + 1;
        return { ...item, qty: newQty };
      }
      return item;
    });
    setCart(updatedCart);

    let data = updatedCart.map((item) => {
      if (item.id === productId) {
        axios
          .patch(`http://localhost:9000/carts/${item.id}`, {
            qty: item.qty,
          })
          .then((res) => {
            getAllCart();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return item;
    });
    setCart(data);
  };

  const decrementQty = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQty = item.qty === 1 ? 1 : item.qty - 1;
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const getAllCart = () => {
    axios
      .get(`http://localhost:9000/carts?userId=${Userauth().id}`)
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center p-4">Cart</h2>
      <div className="row">
        {cart.map((val) => {
          return (
            <div className="col-4">
              <div className="cart">
                <div
                  className="card"
                  style={{
                    width: "19rem",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={val.image}
                    className="card-img-top p-4"
                    alt={val.name}
                    style={{ maxHeight: "350px", maxWidth: "100%" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "1.25rem" }}>
                      {val.name}
                    </h5>
                    <p className="card-text">Price: ${val.price}</p>
                    <div className="">
                      <p>Quantity: {val.qty}</p>
                      <button
                        onClick={() => incrementQty(val.id)}
                        style={{
                          fontSize: "1.25rem",
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => decrementQty(val.id)}
                        style={{
                          fontSize: "1.25rem",
                          padding: "0.2rem 0.5rem",
                          marginLeft: "0.25rem",
                        }}
                      >
                        -
                      </button>
                      <br />
                      <br />
                      <button
                        className="bg-danger text-white px-4 rounded-3 border-0 py-2 me-3"
                        value="Submit"
                        type="button"
                        onClick={(e) => deleteRecord(val.id)}
                        style={{
                          fontSize: "1rem",
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
