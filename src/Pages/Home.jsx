import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import NAvbar from "./Shared/NAvbar";
import RightSideNav from "./Shared/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsData=useLoaderData();
  // console.log(newsData)
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NAvbar></NAvbar>
      <section className=" mt-10  grid grid-cols-1 md:grid-cols-4 gap-6">
        <div  >
            <LeftSideNav></LeftSideNav>
        </div>
        {/* News Container  */}
        <div className="md:col-span-2  ">
           <div>
            {
              newsData.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
           </div>
        </div>
        <div  >
            <RightSideNav></RightSideNav>
        </div>
      </section>
    </div>
  );
};

export default Home;
