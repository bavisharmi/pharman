  import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={container}>

      <div style={card}>

        <h2 style={title}>Pharmacy Login</h2>

        <input type="text" placeholder="Username" style={input} />

        <input type="password" placeholder="Password" style={input} />

        <button style={button} onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f6f9"
};

const card = {
  background: "white",
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
  width: "320px",
  textAlign: "center"
};

const title = {
  marginBottom: "20px"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: "10px",
  background: "#2c3e50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Login;