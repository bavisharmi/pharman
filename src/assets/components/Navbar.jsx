  import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Pharmacy Management System</h2>

      <button onClick={() => navigate("/login")}>
        Start
      </button>

    </div>
  );
}

export default Welcome;