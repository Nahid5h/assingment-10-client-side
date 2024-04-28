import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ViewDetail = () => {
    const {id}=useParams();
    const [item,setItem]=useState({});

    useEffect(()=>{
fetch(`http://localhost:5000/viewDetail/${id}`)
.then(res=>res.json())
.then(data=>{
    setItem(data)
    console.log(data)
})
    },[id])
    return (
        <div>
 <img src={item.image} alt="" />
        </div>
    );
};

export default ViewDetail;