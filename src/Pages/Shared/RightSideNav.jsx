import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import pic1 from "../../assets/qZone1.png";
import pic2 from "../../assets/qZone2.png";
import pic3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <>
      <section>
        <div className="p-4 space-y-3 mc-6">
          <h3 className="text-3xl">Login with</h3>
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle> Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub> Github
          </button>
        </div>
        <div className="p-4  mc-6">
          <h3 className="text-3xl">Find Us On</h3>
          <a className="flex items-center border p-4 rounded-t-lg" href="">
            <FaFacebookF className="mr-3"></FaFacebookF> Facebook
          </a>
          <a className="flex items-center border-x p-4 " href="">
            <FaTwitter className="mr-3"></FaTwitter> Twitter
          </a>
          <a className="flex items-center border p-4 rounded-b-lg" href="">
            <FaInstagram className="mr-3"></FaInstagram> Facebook
          </a>
        </div>

        {/* Q Zone  */}
        <div className="p-4 space-y-3 mc-6">
          <h3 className="text-3xl">Q Zone</h3>
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic3} alt="" />
        </div>
      </section>
    </>
  );
};

export default RightSideNav;
