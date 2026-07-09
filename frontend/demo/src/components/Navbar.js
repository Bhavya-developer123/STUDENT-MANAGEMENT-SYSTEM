import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            display: "flex", 
            justifyContent: "space-between", 
            padding: "15px 30px", 
            backgroundColor: "#1e1e24", 
            color: "white"
        }}>
            <h2>🎓 SMS Portal</h2>
            <div>
                <Link to="/students" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>Dashboard</Link>
                <Link to="/add-student" style={{ color: "white", textDecoration: "none" }}>Add Student</Link>
            </div>
        </nav>
    );
}

export default Navbar;