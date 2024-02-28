import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";





const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDatalength] =useState(4);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black mb-1">Featured Jobs</h1>
                <h1 className="text-xl">Explore thousands of job opportunities with all the information you need. It's your future.</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-14  mb-10 p-5">
                {
                    jobs.slice(0,dataLength).map(job => <JobCard key={job.id} job={job}></JobCard>) 
                }
            </div>

             <div className="text-center mb-24">
             <button onClick={()=>setDatalength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">See All jobs</button>
             </div>
        </div>
    );
};

export default FeaturedJobs;
