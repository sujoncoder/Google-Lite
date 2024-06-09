import AdditionBtn from "@/components/AdditionBtn";
import GoogleImage from "@/components/GoogleImage";
import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <GoogleImage />
        <Search />
        <AdditionBtn />
      </div>
    </div>
  );
};

export default Home;
