import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilitis/storageJobApplicaton";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";
import CommonBanner from "../CommonBanner/CommonBanner";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob ,setDisplayJob] = useState([])


  const handleJobfilter = (filter) =>{
        if(filter ==="all"){
            setDisplayJob(appliedJob);
        }
         else if(filter ==="remote"){
            const remotejob = appliedJob.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(appliedJob);
        } 
        else if(filter === "onsite"){
            const onsideJob = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(onsideJob)
        }

  }


  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJob(jobApplied);
      setDisplayJob(jobApplied)
    }
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
        <CommonBanner AppliedJobs ='Applied Jobs'></CommonBanner>
    
      <div className="mt-5 ml-10 mb-10">
        <details className="dropdown bg-blue-600 rounded-xl">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleJobfilter('all')} ><a>All</a> </li>
            <li onClick={()=>handleJobfilter('remote')}><a>Remote</a></li>
            <li onClick={()=>handleJobfilter('onsite')}><a>On-Side</a></li>
          </ul>
        </details>
      </div>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto p-5 md:mt-36">
        {displayJob.map((job) => (
          <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
