import { Link } from "react-router-dom";


const SpotCard = ({spot}) => {
    const{image,tourists_spot_name,average_cost,totalVisitorsPerYer,travel_time,seasonality,_id}=spot;
    return (
        <div>
             <div>
            <div className="card h-[600px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                   <img className="rounded-xl" src={image} alt="" />
                </figure>
                <div className="card-body ">
                    
                 <h1 className="text-2xl font-semibold text-[#f39c12]">{tourists_spot_name}</h1>
                 <div className="flex  gap-3 mt-4">
                    <button className="btn text-xl w-48 rounded-full ">Cost:{average_cost}</button>
                    <button className="btn text-xl w-48 rounded-full ">Visiters:{totalVisitorsPerYer}</button>
                 </div>
             <div className="flex justify-around mt-5">
             <p className="text-3xl ">{travel_time}</p>
                 <p className="text-3xl">{seasonality}</p>
             </div>
           <Link to={`/viewDetail/${_id}`}>
           <button className="btn bg-[#f39c12] rounded-full mt-8 text-white text-2xl">View 
             Detail</button>
           </Link>
                 
                </div>
            </div>
        </div>
          
        </div>
    );
};

export default SpotCard;