import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";


const AllTSport = () => {
    const spots= useLoaderData()
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mt-3">All Tourist Spots</h1>
          <div className='grid lg:grid-cols-3 gap-8 mt-8'>
           {
               spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>) 
            }
          </div>
        </div>
    );
};

export default AllTSport;