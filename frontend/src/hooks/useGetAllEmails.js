import { useEffect } from "react"
import axios from "axios";
const useGetAllEmails = async () =>{
    useEffect(()=>{
        const fetchEmails = async () =>{
try{
const res = await axios.get("http://localhost:8080/api/v1/email/getallemails");
} catch(error){
    console.log(error);
}
        }
        fetchEmails();
    },[]);
} 
export default useGetAllEmails;