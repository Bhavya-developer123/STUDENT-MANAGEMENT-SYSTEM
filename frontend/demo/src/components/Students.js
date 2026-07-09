import {Link} from "react-router-dom";
function Student(){
return(
    <div style={{padding:"20px"}}>
        <h1>Students</h1>
        <div style={{marginBottom:"20px"}}>
            <Link to="/add-student">
            <button style={{padding:"10px 5px",cursor:"pointer"}}>+Add Student</button>
            </Link>
            <Link to={`/edit-student/${s.id}`}>
    <button style={{ marginRight: "10px" }}>Edit</button>
</Link>
        </div>
    </div>
);
}
export default Students;