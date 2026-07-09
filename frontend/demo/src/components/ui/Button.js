function Button({ children, type = "button", onClick, className = "", style = {} }) {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={className}
            style={{
                padding: "10px 20px",
                backgroundColor: "#2c3e50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                ...style
            }}
        >
            {children}
        </button>
    );
}

export default Button;