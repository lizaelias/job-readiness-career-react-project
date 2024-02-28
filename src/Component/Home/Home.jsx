import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCatogori from "../JobCatogori/JobCatogori";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-200 to-purple-100 font-bold">
        <div>
          <div className="p-4">
            <Navbar></Navbar>
          </div>
          <div className="mt-10 mb-10">
            <Banner></Banner>
          </div>
        </div>
      </div>
      {/* Job Category List */}
      <div className="max-w-7xl mx-auto mt-10">
        <JobCatogori></JobCatogori>
      </div>

      {/* FeaturedJobs */}
      <div className="max-w-7xl mx-auto md:mt-24">
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
