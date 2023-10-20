import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex items-center bg-gray-300 h-16 rounded-xl">
      <button  className="btn btn-secondary text-white ml-5 mr-6">Breaking News</button>
      <Marquee  pauseOnHover={true}speed={100}>
       <Link to="/" className="mr-10">Lorem ipsum dolor sit amet.</Link>
       <Link to="/" className="mr-10">Lorem ipsum dolor sit amet.</Link>
       <Link to="/" className="mr-10">Lorem ipsum dolor sit amet.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
