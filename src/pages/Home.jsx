import Banner from "../components/Banner/Banner";
import BooksCategory from "../components/BooksCategory/BooksCategory";
import FaqSection from "../components/FaqSection/FaqSection";
import LibraryServices from "../components/LibraryServices/LibraryServices";
import Reviews from "../components/Reviews/Reviews";
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

            <div className="mt-16">
                <BooksCategory></BooksCategory>
            </div>

            <div className="mt-16">
                <Trending></Trending>
            </div>

            <div className="mt-16">
            <FaqSection></FaqSection>
            </div>

            <div className="mt-16">
             <Reviews></Reviews>
            </div>

            <div className="mt-16">
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;