import { FaCalculator,FaCreativeCommonsSampling} from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FcEngineering } from "react-icons/fc";



const JobCatogori = () => {
    return (
        <div className=" mb-10">
             <div className="text-center">
                  <h1 className="text-4xl font-bold mb-1">Job Category List</h1>
                  <p className="text-xl mb-7 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ml-4 mr-4">
                  <div className="bg-slate-300 rounded-lg py-5">
                     <div className="w-20 text-red-500  px-5 py-5">
                     <FaCalculator className="text-4xl"></FaCalculator>
                     </div>
                       <h3 className="text-2xl font-medium px-5 text-black">Account & Finance</h3>
                       <p className="font-medium px-5">300 Jobs Available</p>
                  </div>

                  <div className="bg-slate-300 rounded-lg py-5">
                     <div className="w-20 text-red-500  px-5 py-5">
                   
                     <FaCreativeCommonsSampling className="text-4xl"></FaCreativeCommonsSampling>
                     </div>
                       <h3 className="text-2xl font-medium px-5 text-black">Creative Design</h3>
                       <p className="font-medium px-5">100  Jobs Available</p>
                  </div>


                  <div className="bg-slate-300 rounded-lg py-5">
                     <div className="w-20 text-red-500  px-5 py-5">
                  
                     <SiGooglemarketingplatform className="text-4xl"></SiGooglemarketingplatform>
                     </div>
                       <h3 className="text-2xl font-medium px-5 text-black">Marketing & Sales</h3>
                       <p className="font-medium px-5">200 Jobs Available</p>
                  </div>


                  <div className="bg-slate-300 rounded-lg py-5">
                     <div className="w-20 text-red-500  px-5 py-5">
                     <FcEngineering  className="text-4xl"></FcEngineering >
                     </div>
                       <h3 className="text-2xl font-medium px-5 text-black">Engineering Job</h3>
                       <p className="font-medium px-5">300 Jobs Available</p>
                  </div>


               
              </div>
        </div>
    );
};

export default JobCatogori;