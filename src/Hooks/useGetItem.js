import axios from "axios";
import { useState } from "react";
 
const UseApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [job, setJobs] = useState([])
    const GetJobItem = async (url) => {
        try {
            setIsLoading(true);
            const response = await axios.get(url);
            setIsLoading(false);
            console.log(response.data)
            setJobs(response.data)
        }
        catch (e) {
            setIsLoading(false);
            setError(e.message);
        }
    }
    return { GetJobItem, isLoading, error, job }
}
export default UseApi
