import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [control ,setControl]=useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/myCard/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setItem(data);
      });
  }, [user, control]);
  const handleDelete=(id)=>{
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`,{
          method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your information has been deleted.",
              icon: "success"
            });
            setControl(!control);
          }
        });
     
        // console.log("delete consfirmed")
      }
    });
  }
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr className="text-2xl text-orange-300">
          <th>Country Name</th>
          <th>Tourist Spot Name</th>
          <th>Avarage Cost</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      {
        item.map(p=>(

          <tbody key={p._id}>

          <tr className="text-xl">
          
            <td>{p.country_Name}</td>
            <td>{p.tourists_spot_name}</td>
           
            <td>{p.average_cost}</td>
            <td>
           <Link to={`/updateInformation/${p._id}`}>
           <button 
            
            className="btn bg-[#f39c12] rounded-full mt-3  text-white text-2xl">
                Update
            </button>
           </Link>
            </td>
            <td>
            <button 
            onClick={()=>handleDelete(p._id)}
            className="btn bg-[#f39c12] rounded-full mt-3  text-white text-2xl">
                Delete
            </button>
            </td>
          </tr>
  
        </tbody> 
        ))
      }

    </table>
  </div>
  );
};

export default MyList;
