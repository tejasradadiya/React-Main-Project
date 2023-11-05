import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar';
import './style.css';
import axios from 'axios';


const AdminCategory = () => {
    const [category,setCategory] = useState("");
    const [categoryData,setCategoryData] = useState([]);
    const [edit,setEdit] = useState("");

    const handleSubmit = () => {
       
       if(edit){
        axios.put(`http://localhost:9000/category/${edit}`, {
            category_name: category,
        })
            .then((res) => {
                alert("Category successfully Update");
                setCategory("");

                setEdit("");
                getUser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
       }else{
        axios.post(`http://localhost:9000/category`, {
            category_name: category,
        })
        .then((res) => {
            alert("Category successfully added.");
            setCategory("");   
            getUser();
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
       }
      
    }

    const getUser = () => {
        axios.get(`http://localhost:9000/category`)
            .then((res) => {
                setCategoryData(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const categoryDelete = (id) =>{
        axios.delete(`http://localhost:9000/category/${id}`)
        .then((res)=>{
           alert("category delete");
           setCategory("");
           getUser();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const categoryEdit = (id) => {
        axios.get(`http://localhost:9000/category/${id}`)
            .then((res) => {
                setCategory(res.data.category_name);
                setEdit(id)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <center>
            <div className="admin-category-container">
            <AdminNavbar />
            <h2>Admin Category page</h2>
            <div className="category-form">
                <table className="custom-table">
                    <tbody>
                        <tr>
                            <td>Category:</td>
                            <td>
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    name="category"
                                    placeholder="Enter the category"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                {edit ? (
                                    <button className="edit-button" onClick={() => handleSubmit()}>
                                        Edit
                                    </button>
                                ) : (
                                    <button className="submit-button" onClick={() => handleSubmit()}>
                                        Submit
                                    </button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div className="category-list">
                <table className="table table-bordered border-primary">
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>Category</td>
                            <td>Action</td>
                        </tr>
                        {categoryData.map((val) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.category_name}</td>
                                <td>
                                    <button className="delete-button" onClick={() => categoryDelete(val.id)}>
                                        Delete
                                    </button>
                                    <button className="edit-button ms-2" onClick={() => categoryEdit(val.id)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </center>
    )
}

export default AdminCategory
