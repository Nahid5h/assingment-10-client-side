import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateINformation = () => {
    const { id }= useParams();
    const [information,setInformation]=useState({})
    useEffect(()=>{
        fetch(`https://assingment-10-server-three.vercel.app/viewDetail/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setInformation(data)
            console.log(data)
        })
            },[id])
            const handleUpdate=event =>{
                event.preventDefault();
                const form = event.target;
                const image = form.image.value;
                const tourists_spot_name = form.tourists_spot_name.value;
                const country_Name = form.country_Name.value;
                const location = form.location.value;
                const description = form.description.value;
                const average_cost = form.average_cost.value;
                const seasonality = form.seasonality.value;
                const travel_time = form.travel_time.value;
                const totalVisitorsPerYer = form.totalVisitorsPerYer.value;
              
        
                const updateSpot={image,tourists_spot_name,country_Name,location,
                    description,average_cost,seasonality,travel_time,totalVisitorsPerYer
                   
                }
                console.log(updateSpot);
            //   send data to the server 
            fetch(`https://assingment-10-server-three.vercel.app/update/${id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
               body:JSON.stringify(updateSpot)
            })
            .then(res =>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                  Swal.fire({
                    title: 'Success',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
        
                }
            })
            }
    return (
        <div className="p-5 shadow-xl my-12 rounded-xl bg-base-200">
        <h1 className="text-center text-xl md:text-3xl font-bold text-[#f39c12]">
          Add Your Spots here..
        </h1>
        <form onSubmit={handleUpdate} >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image URL"
                className="input input-bordered"
                defaultValue={information.image}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">tourists_spot_name</span>
              </label>
              <input
                type="text"
                name="tourists_spot_name"
                placeholder="name"
                className="input input-bordered"
                defaultValue={information.tourists_spot_name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">country_Name</span>
              </label>
              <input
                type="text"
                name="country_Name"
                placeholder="country_Name"
                className="input input-bordered"
                defaultValue={information.country_Name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="location"
                className="input input-bordered"
                defaultValue={information.location}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">short description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="description"
                className="input input-bordered"
                defaultValue={information.description}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">average_cost</span>
              </label>
              <input
                type="number"
                name="average_cost"
                placeholder="average_cost"
                className="input input-bordered"
                defaultValue={information.average_cost}
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">seasonality</span>
              </label>
              <select
                className="select select-bordered w-full "
                name="seasonality"
              
              >
                <option disabled selected>
                  Select your sesason
                </option>
                <option> Summer</option>
                <option> Winter</option>
                <option>Spring</option>
                <option>Fall </option>
                defaultValue={information.seasonality}
         
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Travel_time</span>
              </label>
              <select
                className="select select-bordered w-full "
                name="travel_time"
                defaultValue={information.travel_time}
              >
                <option disabled selected>
                  Select your Travel_time
                </option>
                <option>Sunday</option>
                <option> Monday</option>
                <option>Tuesday</option>
                <option> Wednesday</option>
                <option>Thursday </option>
                <option>Friday </option>
                <option>Saturday </option>
             
         
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">TotalVisitorsPerYer</span>
              </label>
              <select
                className="select select-bordered w-full "
                name="totalVisitorsPerYer"
                defaultValue={information.totalVisitorsPerYer} 
              > 
                <option disabled selected>
                  Select Number
               
                </option>
                <option>10000</option>
                <option> 20000</option>
                <option>40000</option>
                <option>50000</option>
                <option>700000 </option>
                <option>800000</option>
                <option>More:90000 </option>
               
         
              </select>
            </div>
            
          
          

          </div>

          <button className="btn w-full mt-3 bg-[#f39c12] text-white hover:text-orange-500">
            Update
          </button>
        </form>
      </div>
    );
};

export default UpdateINformation;