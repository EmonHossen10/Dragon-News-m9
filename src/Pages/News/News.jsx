import { useParams } from "react-router-dom";
import Header from "../Shared/Header";
import RightSideNav from "../Shared/RightSideNav";
import NAvbar from "../Shared/NAvbar";

const News = () => {
    const {id}=useParams();
   
  return (
    <div>
      <Header></Header>
      <NAvbar></NAvbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
            <h3 className="text-3xl">This is news details</h3>
            <p>
                {id}
            </p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
