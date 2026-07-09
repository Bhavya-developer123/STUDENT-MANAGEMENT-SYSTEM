function Input({ type = "text", name, placeholder, value, onChange, required = false, style = {} }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                fontSize: "14px",
                ...style
            }}
        />
    );
}

export default Input;