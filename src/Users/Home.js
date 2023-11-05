import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import Slider from "./Slider";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [furniture, setFurniture] = useState([]);

  const getAllProduct = async () => {
    axios
      .get(`http://localhost:9000/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };
  const getAllElectronics = () => {
    axios
      .get(`http://localhost:9000/products`)
      .then((res) => {
        let ans = res.data.filter((val, i) => {
          if (i < 4) {
            return val.category === "eletronics";
          }
        });
        setElectronics(ans);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };
  const getAllMobile = () => {
    axios
      .get(`http://localhost:9000/products?category=mobile`)
      .then((res) => {
        setMobile(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const getAllShoes = () => {
    axios
      .get(`http://localhost:9000/products?category=shoes`)
      .then((res) => {
        setShoes(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const getAllFurniture = () => {
    axios
      .get(`http://localhost:9000/products?category=furniture`)
      .then((res) => {
        setFurniture(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  useEffect(() => {
    getAllProduct();
    getAllElectronics();
    getAllMobile();
    getAllShoes();
    getAllFurniture();
  }, []);

  return (
    <>
    {/* <div>
      <Slider />
    </div> */}
      <div className="container">
        <h2 className="pt-4 pb-4">Best of Electronics</h2>
        <div className="row">
          {electronics.map((val) => {
            return (
              <div className="col-md-3 pb-3">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <h2 className="pt-4 pb-4">Best of Mobile</h2>
        <div className="row">
          {mobile.map((val) => {
            return (
              <div className="col-md-3 pb-3">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    
      <div className="container">
        <h2 className="pt-4 pb-4">Best of Shoes</h2>
        <div className="row">
          {shoes.map((val) => {
            return (
              <div className="col-md-3 pb-2">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
