import {useState} from 'react'
function CreateTodoList(){
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => JSON.parse(localStorage.getItem('jobs')) ?? []);
    const handleSubmit = () => {
        if(job){
            const newJob = [...jobs, job];
            setJobs(prev => [...prev, job]);
            localStorage.setItem('jobs', JSON.stringify(newJob));
            setJob('');
        }
    }
    return (
        <div>
            <div><input value={job} onChange={(e)=>{setJob(e.target.value)}}/><button onClick={handleSubmit}>Add</button></div>
            <div>
                <ul>
                    {
                    jobs.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
export default CreateTodoList
