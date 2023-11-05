// import React from 'react'
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Slider = () => {
//     const [img,setImg] = useState("");
//     const [slider,setSlider] = useState([]);
//     const [edit,setEdit] = useState("");

//     const handleSubmit = () => {
       
//        if(edit){
//         axios.put(`http://localhost:7000/slider/${edit}`, {
//             image : img
//         })
//             .then((res) => {
//                 toast.success("Slider successfully Update");
//                 setImg("");
//                 setEdit("");
//                 getSlider();
//             }).catch((err) => {
//                 console.log(err);
//                 return false;
//             })
//        }else{
//         axios.post(`http://localhost:7000/slider`, {
//             image: img,
//         })
//         .then((res) => {
//             toast.success("Slider successfully add..");
//             setImg("");  
//             getSlider();
//         })
//         .catch((err) => {
//             console.log(err);
//             return false;
//         });
//        }
      
//     }

//     const getSlider = () => {
//         axios.get(`http://localhost:7000/slider`)
//             .then((res) => {
//                 setSlider(res.data);
//             }).catch((err) => {
//                 console.log(err);
//                 return false;
//             })
//     }

//     const categoryDelete = (id) =>{
//         axios.delete(`http://localhost:7000/slider/${id}`)
//         .then((res)=>{
//            alert("Slider delete");
//            setImg("");
//            getSlider();
//         }).catch((err)=>{
//             console.log(err);
//             return false;
//         })
//     }

//     const categoryEdit = (id) => {
//         axios.get(`http://localhost:7000/slider/${id}`)
//             .then((res) => {
//                 setImg(res.data.image);
//                 setEdit(id)
//             }).catch((err) => {
//                 console.log(err);
//                 return false;
//             })
//     }

//     useEffect(()=>{
//         getSlider()
//     },[])
//   return (
//     <div>
//       <h2>Slider</h2>
//             <div className="container-category">
//                 <table border={1} className="custom-table">
//                     <tbody>
//                         <tr>
//                             <td>Iamgeurl</td>
//                             <input type="text" value={img} onChange={(e) => setImg(e.target.value)} name="img" placeholder="Enter the Image Url" />

//                         </tr>
//                         <tr>
//                             <td />
//                             <td>
//                                {
//                                  edit ? ( <input type="button"  value="Edit" onClick={ ()=> handleSubmit()}/>)
//                                  : ( <input type="button"  value="Submit" onClick={ ()=> handleSubmit()}/>)
//                                } 
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//             <br></br>

//            <div className='container'>
//            <table border={1} className='table table-bordered border-primary'>
//                 <tbody>
//                     <tr>
//                         <td>Id</td>
//                         <td>Slider</td>
//                         <td>Action</td>
//                     </tr>
//                     {
//                         slider.map((val) => {
//                             return (
//                                 <tr key={val.id}>
//                                     <td>{val.id}</td>
//                                     <td>
//                                         <img src={val.image} width={"250px"}></img>
//                                     </td>
//                                     <td>


//                                         <button className='btn btn-danger' onClick={ ()=> categoryDelete(val.id)}>Delete</button>
//                                         <button className='btn btn-success ms-2' onClick={ ()=> categoryEdit(val.id)}>Edit</button>
//                                     </td>

//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//            </div>
//            <ToastContainer/>
//     </div>
//   )
// }

// export default Slider
