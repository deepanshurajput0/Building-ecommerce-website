import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFail } from './../redux/user/userSlice'
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state)=>state.user)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit=async(e)=>{
    dispatch(loginStart())
     e.preventDefault()
     try {
      const res = await fetch('/api/v1/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })
      const data = await res.json()
      if(!res.ok){
        dispatch(loginFail(data.message))
        toast.error(data.message)
      }else{
        dispatch(loginSuccess(data.user))
      }
     
     } catch (error) {
      dispatch(loginFail(error.message))
     }
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  onChange={handleInput}
                  value={user.email}
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
                  onChange={handleInput}
                  value={user.password}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className=" hover:bg-[#b6e107] hover:scale-105  w-[20rem] font-semibold rounded-3xl p-3  bg-[#b0c751]"
                >
                  {
                    loading ? <span class=" loading loading-spinner loading-xs"></span> :'Login'
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
