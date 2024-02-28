import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const JobCard = ({ job }) => {
  const {
    job_title,
    id,
    company_name,
    remote_or_onsite,
    logo,
    job_type,
    location,
    salary,
  } = job;


  return (
    <div className="card card-compact border">
      <img className="w-52 px-5 py-5" src={logo} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div>
          <button className="py-2 px-5 font-extrabold border rounded text-[#7E90FE]">
            {job_type}
          </button>
          <button className="py-2 px-5 font-extrabold border rounded ml-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
        </div>

        <div className="flex">
          <h2 className="flex mr-2">
            <CiLocationOn className="text-2xl"></CiLocationOn> {location}
          </h2>
          <h2 className="flex mr-2">
            <AiTwotoneDollarCircle className="text-2xl"></AiTwotoneDollarCircle>
            {salary}
          </h2>
        </div>

        <div className="card-actions">
      
          <Link to={`/job/${id}`}>
          <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
