import { AiTwotoneDollarCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import CommonBanner from "../CommonBanner/CommonBanner";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utilitis/storageJobApplicaton";



const ShowJobDetalis = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const intId = parseInt(id);
  
  const job = jobs.find(job => job.id === intId);

//  tostify 
   const handleJobApply =()=>{
    saveJobApplication(intId);
    toast("apply your job seccessfully");
   }




  return (
  <div>

      {/* detalis bannner */}
      <div>
    <CommonBanner JobDetails={'Job Details'}></CommonBanner>
</div>


<div className="max-w-7xl mx-auto p-10">

    
     
{/* detalis section */}

<div className="grid md:grid-cols-4 mt-5 gap-5">
  <div className="col-span-3 space-y-10">
  <h3><span className="font-medium text-2xl"> Job Description: </span>  {job.job_description} </h3>
  
    <h3><span className="font-medium text-2xl"> Job Dresponsibility : </span>  {job.job_responsibility} </h3>

    <h3><span className="font-medium text-2xl">  Education Requirement : </span>  {job.education_requirement}</h3>

     <h3><span className="font-medium text-2xl"> Experiences : </span>  {job.experiences} </h3>
  </div>


  {/* sub part */}

  <div className="md:col-span-1">
         <div className="bg-emerald-200 p-5 rounded">
         <h2 className="text-2xl font-medium border-b-2 border-red-600">Job Details</h2>

    
      <h2 className="flex mr-2 mt-7"> <span className="font-medium text-xl">Salary:</span>
      <AiTwotoneDollarCircle className="text-2xl ml-2"></AiTwotoneDollarCircle>
     {job.salary}
     </h2>

     <h2><span className="font-medium text-xl">Job tittle :</span> {job.job_title}</h2>

       <div>

           <h2 className="text-2xl font-medium border-b-2 border-red-600 mt-2 mb-3">Contact Information</h2>

            
            <h2><span className="font-medium text-xl">Phone:</span> {job.contact_information.phone}</h2>
            <h2><span className="font-medium text-xl">Email :</span> {job.contact_information.email}</h2>
             <h2><span className="font-medium text-xl">Address:</span> Dhaka</h2>
        </div>
     </div>

     <div>
     <button onClick={handleJobApply} class="btn bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white w-full mt-2">Apply Now</button>
     </div>
  </div>
</div>
</div>
<ToastContainer />
  </div>

  );
};

export default ShowJobDetalis;
