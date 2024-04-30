import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const Register = () => {
  const {creatUser,updateUserProfile} = useContext(AuthContext);
  const location =useLocation();
  console.log('successfull',location)
  const navigate =useNavigate();


  const handleRegister=e=>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form= new FormData(e.currentTarget);
    const name=form.get('name');
    const photo=form.get('photo');
    const email=form.get('email');
    const password=form.get('password');
    console.log(name,photo,email,password);

    creatUser(email,password)
    .then((result)=>{
      updateUserProfile(name,photo).then(()=>{
        
      })
      console.log(result.user)
      navigate(location?.state?location.state:'/login')
    })
    .catch(error=>{
      console.error(error)
    })


   
  }
    return (
        <div className=" flex justify-center items-center mt-7">
        <div className="p-5 lg:p-40 rounded-md shadow-2xl bg-base-100 w-full lg:rounded-full">
      <h1 className="font-bold text-2xl text-center text-orange-500">
      Register  Here
      </h1>
      <form className="lg:card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#f39c12]  text-white hover:text-black">
         Register
          </button>
        </div>
      </form>
      <p>
       Aleady have a acount?
        <Link to={"/login"} className="btn btn-link font-bold ">
        Login
        </Link>
      </p>
      <hr className="mb-3" />
    
    </div>
    </div>
    );
};

export default Register;