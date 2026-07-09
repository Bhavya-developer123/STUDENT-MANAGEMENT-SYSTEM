import { useEffect, useState } from "react";
import { getAllStudents } from "../api/StudentService";
import StudentCard from "../components/StudentCard";
import { deleteStudent } from "../api/StudentService";
import { Link } from "react-router-dom";
function Student(){
    const[student,setStudent]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
        fetchStudents();
    },[])
    async function fetchStudents(){
        try{
            const response=await getAllStudents();
            setStudent(response.data);
        }
        catch(err){
            setError("failed to load Students");
        }
        finally{
            setLoading(false);
        }
    }
    async function handleDelete(id){
        if (window.confirm("Are you sure you want to delete this student?")) {
    try{
        await deleteStudent(id);
        fetchStudents();
    }
    catch(err){
        alert("unable to delte the student");
    }
}}
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return(
        <div>
            <Link to="/add-student">
                <button>Add Student</button>
            </Link>
            <h1>Students</h1>
            {
                student.map((s)=>(
                    <StudentCard key={s.id} student={s} onDelete={handleDelete}/>
                ))    
            }
            
        </div>
    );
}
export default Student;