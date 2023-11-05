import { Link } from "react-router-dom";
import trendingPic from "../../assets/images/trending.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
const Trending = () => {
  return (
    <div>
        
      <div>
        <h1 className="text-4xl font-bold">Trending</h1>
        <progress
          className="progress progress-primary w-[100px]"
          value="20"
          max="100"
        ></progress>
      </div>

      <section className="flex flex-col md:flex-col lg:flex-row justify-between gap-10 mt-10">
        <div className="flex-1">
          <img className="rounded-md" src={trendingPic} alt="" />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">Library News</h1>

          <div>
            <div className="card mt-5">
              <div className="space-y-3">
                <h2 className="card-title text-2xl font-bold">
                  Library Office Security Administration
                </h2>
                <p>
                  We love our library and hope that we find as many
                  volunteers…
                </p>
                <div className="card-actions">
                  <Link>
                    <h1 className="flex justify-center items-center gap-2 text-[#0087EB] text-[14px]">
                      <span>
                        <FaLongArrowAltRight></FaLongArrowAltRight>
                      </span>{" "}
                      Posted on 10.21.2023{" "}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card mt-5">
              <div className="space-y-3">
                <h2 className="card-title text-2xl font-bold">
                Deconstructing History: Things You Didn’t Know
                </h2>
                <p>
                We would like to emphasize the impact of earthquakes on some countries…
                </p>
                <div className="card-actions">
                  <Link>
                    <h1 className="flex justify-center items-center gap-2 text-[#0087EB] text-[14px]">
                      <span>
                        <FaLongArrowAltRight></FaLongArrowAltRight>
                      </span>{" "}
                      Posted on 01.21.2023{" "}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className="card mt-5">
              <div className="space-y-3">
                <h2 className="card-title text-2xl font-bold">
                The Appalling and Beguiling History
                </h2>
                <p>
                The memory of Nazis deeds to some of the world’s most…
                </p>
                <div className="card-actions">
                  <Link>
                    <h1 className="flex justify-center items-center gap-2 text-[#0087EB] text-[14px]">
                      <span>
                        <FaLongArrowAltRight></FaLongArrowAltRight>
                      </span>{" "}
                      Posted on 02.28.2023{" "}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card mt-5">
              <div className="space-y-3">
                <h2 className="card-title text-2xl font-bold">
                Latest Novel: Will mind blowing You Didn’t Know
                </h2>
                <p>
                We would like to emphasize the impact of earthquakes on some countries…
                </p>
                <div className="card-actions">
                  <Link>
                    <h1 className="flex justify-center items-center gap-2 text-[#0087EB] text-[14px]">
                      <span>
                        <FaLongArrowAltRight></FaLongArrowAltRight>
                      </span>{" "}
                      Posted on 06.12.2023{" "}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          


        </div>
      </section>

    </div>
  );
};

export default Trending;
