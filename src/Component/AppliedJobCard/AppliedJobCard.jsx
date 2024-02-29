import React from "react";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJobCard = ({ job }) => {
  
  const {logo,job_title,company_name,job_type,remote_or_onsite,location,salary,id}=job;
  return (
    <div>
      <div className="card card-side border bg-slate-200">
        <figure>
          <img className="w-72 bg-yellow-500 p-10 ml-8 rounded-lg"
            src={logo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          
          
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div>
            
          <button className="py-2 px-5 font-extrabold border border-red-500 rounded text-[#7E90FE]">
            {job_type}
          </button>
          <button className="py-2 px-5 font-extrabold border border-red-500 rounded ml-4 text-[#7E90FE] mt-4">
            {remote_or_onsite}
          </button>
            
        </div>

        <div className="flex mt-3">
          <h2 className="flex mr-2 font-bold">
            <CiLocationOn className="text-2xl"></CiLocationOn> {location}
          </h2>
          <h2 className="flex mr-2 font-bold">
            <AiTwotoneDollarCircle className="text-2xl"></AiTwotoneDollarCircle>
            {salary}
          </h2>
        </div>





          <div className="card-actions justify-end items-center">
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
