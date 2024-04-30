import Banner from "./Banner";
import ShowGallary from "./ShowGallary";
import TouristSpotSection from "./TouristSpotSection";
import TravelNestle from "./TravelNestle";



const Home = () => {
    return (
        <div className="mt-10">
          <Banner></Banner>
          <TouristSpotSection></TouristSpotSection>
          <TravelNestle></TravelNestle>
          <ShowGallary></ShowGallary>

        </div>
    );
};

export default Home;