const  createJob=(req,res)=>res.send('create job')
const  getAllJobs=(req,res)=>res.send('get all job')
const  updateJob=(req,res)=>res.send('update job')
const  deleteJob=(req,res)=>res.send('delete job')
const  showStats=(req,res)=>res.send('show stats job')


export { createJob, deleteJob, getAllJobs, updateJob, showStats }