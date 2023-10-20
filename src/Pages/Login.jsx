import { Link, useLocation, useNavigate } from "react-router-dom";
import NAvbar from "./Shared/NAvbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const location=useLocation()
    console.log("Inside Login form in ",location.state)
    const navigate=useNavigate()


const handleLogin=e=>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form=new FormData(e.currentTarget);
    const email=form.get("email")
    const password=form.get("password")
     console.log(email,password)


    // sign in
    signIn(email,password)
    .then(result=>{
        console.log(result.user)

        // navigate after login
        navigate(location?.state ? location.state : "/")
    })
    .catch(error=>{
        console.error(error.message)
    })
}
   
  return (
    <>
      <NAvbar></NAvbar>
      <h2 className="text-3xl">Login page</h2>

      <section className="lg:w-1/2 w-10/12 mx-auto md:mt-12 mt-5">
        <form onSubmit={handleLogin}  className=" p-8  shadow-2xl bg-white border-2 border-white rounded-xl ">
          <h2 className="text-center font-bold mb-8 text-3xl">
            Login your account
          </h2>
          <hr className="mb-5 " />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold ">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
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
            <button  className="btn btn-primary">Login</button>
          </div>
          <p className="mt-5 text-center  text-sm">Do not Have An Account ? <Link className="text-red-500 font-bold" to="/register"> Register</Link></p>
        </form>
      </section>
    </>
  );
};

export default Login;
