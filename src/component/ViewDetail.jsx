import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://assingment-10-server-three.vercel.app/viewDetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div>
        <h1 className="text-4xl font-bold text-amber-400 text-center">this is view all the  information</h1>
      <div className="mt-10 flex  gap-11 ">
        <div className="flex-1  flex items-center py-10 rounded-2xl justify-center  ">
          <img className=" h-[711px]  rounded-2xl  " src={item.image} alt="" />
        </div>
        <div className="flex-1 ">
          <h1 className="text-5xl font-semibold">
            {" "}
            Contry: {item.country_Name}{" "}
          </h1>
          <p className="my-8 text-2xl"> {item.tourists_spot_name} </p>
          <hr />
          <p className="my-8 text-2xl">{item.description} </p>
          <hr />
          <p className="my-8 text-2xl">Location :{item.location}</p>
          <div className="flex gap-6 my-8 text-2xl  ">
            <button className="btn rounded-full text-[#23BE0A] text-2xl">
              Season: {item.seasonality}{" "}
            </button>
            <button className="btn rounded-full text-[#23BE0A] text-2xl">
              Cost:{item.average_cost}{" "}
            </button>
            <button className="btn rounded-full text-[#23BE0A] text-2xl">
              visitors numbers:{item.totalVisitorsPerYer}{" "}
            </button>
          </div>

          <hr />

          <div className="my-8 text-2xl space-y-4">
            <p>
              User Name :{" "}
              <span className="font-bold ml-28">
                <button className="btn rounded-full text-[#FFFFFF] text-2xl bg-[#50B1C9]">
                  {item.name}{" "}
                </button>
              </span>
            </p>
          </div>
          <button className="btn rounded-full text-[#23BE0A] text-2xl">
            Day: {item.travel_time}{" "}
          </button>
          <div className=" flex gap-5 mt-10">
            <button className="btn border text-2xl font-semibold  h-16  bg-[#FFFFFF]">
              Email: {item.email}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
