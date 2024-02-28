import Navbar from "../Navbar/Navbar";

const CommonBanner = ({ JobDetails }) => {
  return (
    <div className="mt-5 max-w-7xl mx-auto">
        <Navbar></Navbar>
       <div>
        <img className="w-full" src="https://i.ibb.co/M2gGtmb/mobile-phone-1419275-960-720.jpg" alt="" />
      <h2 className="text-center text-3xl font-bold mt-10 border-b-2 border-spacing-y-6 text-blue-600">{JobDetails}</h2>
       </div>
    </div>
  );
};


export default CommonBanner;
