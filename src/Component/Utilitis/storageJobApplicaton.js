


const  getStoredJobApplication =()=>{

    const storedJobApplication =localStorage.getItem('job-application')

    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }else{
        return []
    }

}

const saveJobApplication = (id) =>{
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(jobid => jobid ===id);
    if(!exist){
        storedJobApplication.push(id);
        localStorage.setItem('job-application',JSON.stringify(storedJobApplication))
    }
}

export{getStoredJobApplication,saveJobApplication}