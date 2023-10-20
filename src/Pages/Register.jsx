import { Link } from "react-router-dom";
import NAvbar from "./Shared/NAvbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} =useContext(AuthContext)
    

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create user
    createUser(email,password)
    .then(result=>console.log(result.user))
    .catch(error=>console.log(error.message))
  };
  return (
    <div>
      <NAvbar></NAvbar>
      <section className="lg:w-1/2 w-10/12 mx-auto md:mt-12 mt-5">
        <form
          onSubmit={handleRegister}
          className=" p-8  shadow-2xl bg-white border-2 border-white rounded-xl "
        >
          <h2 className="text-center font-bold mb-8 text-3xl">
            Register your account
          </h2>
          <hr className="mb-5 " />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Name : </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="mt-5 text-center  text-sm">
            Already Have An Account ?{" "}
            <Link className="text-red-500 font-bold" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;
