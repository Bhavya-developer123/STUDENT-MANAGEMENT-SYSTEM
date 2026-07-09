import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudentById, editStudent } from "../api/StudentService";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        age: "",
        course: "",
        email: ""
    });

    useEffect(() => {
        async function loadStudent() {
            try {
                const response = await getStudentById(id);
                setStudent(response.data);
            } catch (error) {
                console.error("Error fetching student data:", error);
                alert("❌ Unable to load student details");
            }
        }
        loadStudent();
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await editStudent(id, student);
            alert("✅ Student Updated Successfully");
            navigate("/students");
        } catch (error) {
            console.error("Error updating student:", error);
            alert("❌ Unable to Update Student");
        }
    }

    return (
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Enter Name" 
                    value={student.name} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    type="number" 
                    name="age" 
                    placeholder="Enter Age" 
                    value={student.age} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    type="text" 
                    name="course" 
                    placeholder="Enter Course" 
                    value={student.course} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    value={student.email} 
                    onChange={handleChange} 
                    required 
                />
                <Button type="submit" style={{ width: "100%", marginTop: "15px", backgroundColor: "#2980b9" }}>
                    Update Student
                </Button>
            </form>
        </div>
    );
}

export default EditStudent;