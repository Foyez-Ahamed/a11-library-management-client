import Banner from "../components/Banner/Banner";
import FaqSection from "../components/FaqSection/FaqSection";
import LibraryServices from "../components/LibraryServices/LibraryServices";
import Footer from "../components/Shared/Footer";
import Trending from "../components/Trending/Trending";

const Home = () => {
    return (
        <div>

            <div className="mt-10">
            <Banner></Banner>
            </div>

            <div className="mt-10">
                <LibraryServices></LibraryServices>
            </div>

            <div className="mt-10">
                <Trending></Trending>
            </div>

            <div className="mt-16">
            <FaqSection></FaqSection>
            </div>

            <div className="mt-10">
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;