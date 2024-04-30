import { Link, useLoaderData } from "react-router-dom";

const TouristSpotSection = () => {
  const spot = useLoaderData();

  return (
    //  <div className="bg-slate-600">
    <div className="grid lg:grid-cols-3 gap-8 mt-8 ">
   
      {spot.map((s) => (
        <div key={s._id} className="">   
          <div className="card h-[600px]  bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
              <img className="rounded-xl" src={s.image} alt="" />
            </figure>
            <div className="card-body ">
              <h1 className="text-2xl font-semibold text-[#f39c12]">
                {s.tourists_spot_name}
              </h1>
              <div className="flex flex-col lg:flex-row  gap-3 mt-4">
                <button className="btn text-xl rounded-full ">
                  Cost:{s.average_cost}
                </button>
                <button className="btn text-xl rounded-full ">
                  Visiters:{s.totalVisitorsPerYer}
                </button>
              </div>
              <div className="flex justify-around mt-5">
                <p className="text-3xl ">{s.travel_time}</p>
                <p className="text-3xl">{s.seasonality}</p>
              </div>
              <Link to={`/viewDetail/${s._id}`}>
                <button className="btn bg-[#f39c12] rounded-full mt-8 text-white text-2xl">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    //  </div>
  );
};

export default TouristSpotSection;
