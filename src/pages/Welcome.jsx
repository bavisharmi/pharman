  import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div style={container}>

      <div style={card}>

        <h1 style={title}>Pharmacy Management System</h1>

        <p style={text}>
          Manage medicines, billing, and pharmacy operations easily.
        </p>

        <button
          style={button}
          onClick={() => navigate("/login")}
        >
          Start
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
  background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
  fontFamily: "Arial"
};

const card = {
  background: "white",
  padding: "50px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  width: "350px"
};

const title = {
  color: "#2c3e50",
  marginBottom: "20px"
};

const text = {
  color: "#555",
  marginBottom: "30px"
};

const button = {
  padding: "12px 25px",
  fontSize: "16px",
  background: "#2c3e50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Welcome;