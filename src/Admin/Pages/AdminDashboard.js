import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css';

const AdminDashboard = () => {
  const [usercnt, setUsercnt] = useState(0);
  const [productcnt, setProductcnt] = useState(0);
  const [categorycnt, setCategorycnt] = useState(0);

  useEffect(() => {
    axios.get(` http://localhost:9000/users`).then((res) => {
      setUsercnt(res.data.length)
    }).catch((err) => {
      console.log(err);
      return false;
    })

    axios.get(`http://localhost:9000/products`)
      .then((res) => {
        setProductcnt(res.data.length)
      })
      .catch((err) => {
        console.log(err);
        return false;
      })

    axios.get(`http://localhost:9000/category`)
      .then((res) => {
        setCategorycnt(res.data.length);
      })
      .catch((err) => {
        console.log(err);
        return false;
      })

  }, [])

 


  return (
    <div className="admin-dashboard">
    <div className="p-5">
      <div className="row justify-content-between">
        <div className="col-lg-2 p-4 dashboard-card">
          <h4>User</h4>
          <h2>{usercnt}</h2>
        </div>
        <div className="col-lg-2 p-4 dashboard-card">
          <h4>Category</h4>
          <h2>{categorycnt}</h2>
        </div>
        <div className="col-lg-2 p-4 dashboard-card">
          <h4>Product</h4>
          <h2>{productcnt}</h2>
        </div>
      </div>
    </div>
  </div>

  )
}

export default AdminDashboard
