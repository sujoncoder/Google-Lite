import GoogleImage from "@/components/home/GoogleImage";
import HomeHeader from "@/components/home/HomeHeader";
import HomeSearch from "@/components/home/HomeSearch";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <GoogleImage />
        <HomeSearch />
      </div>
    </div>
  );
};

export default Home;
