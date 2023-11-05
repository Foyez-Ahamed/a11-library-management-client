import Banner from "../components/Banner/Banner";
import LibraryServices from "../components/LibraryServices/LibraryServices";
import Footer from "../components/Shared/Footer";
import Trending from "../components/Trending/Trending";

const Home = () => {
    return (
        <div>

            <div className="mt-2">
            <Banner></Banner>
            </div>

            <div className="mt-10">
                <LibraryServices></LibraryServices>
            </div>

            <div className="mt-10">
                <Trending></Trending>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;