import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupStart, signupFail, signupSuccess } from "../redux/user/userSlice";
const Register = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
 const InputHandler =(e)=>{
    setUser({
      ...user, [e.target.name]: e.target.value
    })
 }

  const submitHandler =async(e)=>{
    e.preventDefault()
    try {
      dispatch(signupStart())
      const res = await fetch('/api/v1/user/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })
      const data = await res.json()
      console.log(data)
      if(!res.ok){
        dispatch(signupFail(data.message))
      }
      dispatch(signupSuccess(data.user))
    } catch (error) {
      dispatch(signupFail(error.message))
    }
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={submitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  value={user.firstName}
                  name="firstName"
                  onChange={InputHandler}
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  value={user.lastName}
                  name="lastName"
                  onChange={InputHandler}
                  placeholder="Last Name"
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
                  value={user.email}
                  name="email"
                  onChange={InputHandler}
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
                  value={user.password}
                  name="password"
                  onChange={InputHandler}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label mt-2">
                  <p>
                    Already have an account ?{" "}
                    <Link to={"/login"}>Login Now</Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
              <button type="submit" className=' hover:bg-[#b6e107] hover:scale-105  w-[20rem] font-semibold rounded-3xl p-3  bg-[#b0c751]' >Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
