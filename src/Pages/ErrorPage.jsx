import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center"> 
           <img width={500} src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
           <Link to="/" > <button className="btn btn-success text-white ">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;