



const Banner = () => {
    return (
        <div className="flex justify-between items-center">
             <div className="w-[50%] ml-10">
                  
                <div className="md:w-[570px]md:h-[300px]">
                <h1 className="md:text-[50px] font-semibold leading-tight">One Step  <br/>Closer To Your <br/> <span className="text-blue-800"> Dream Job</span></h1>
                   <p className="md:w-[520px] text-[16px] mt-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                   <a class="btn bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white px-7 mt-5 py-2">Get Started</a>
                </div>
                   
             </div>
             <div  className="w-[50%]">

                <img className="md:ml-40" src="https://i.ibb.co/zQdRQCg/Untitled-design-removebg-preview.png" alt="" />

             </div>
        </div>
    );
};

export default Banner;