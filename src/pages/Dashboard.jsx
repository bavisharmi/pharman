  import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const goMedicines = () => {
    navigate("/medicines");
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>

      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

        <div style={card}>
          <h3>Total Medicines</h3>
          <p>120</p>
        </div>

        <div style={card}>
          <h3>Today's Sales</h3>
          <p>₹3500</p>
        </div>

        <div style={card}>
          <h3>Orders</h3>
          <p>18</p>
        </div>

        <div style={card}>
          <h3>Expired Medicines</h3>
          <p>2</p>
        </div>

      </div>

      <br /><br />

      <h3>Recent Medicines</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Paracetamol</td>
            <td>50</td>
            <td>₹10</td>
          </tr>

          <tr>
            <td>Dolo 650</td>
            <td>40</td>
            <td>₹15</td>
          </tr>

          <tr>
            <td>Crocin</td>
            <td>30</td>
            <td>₹12</td>
          </tr>
        </tbody>
      </table>

      <br /><br />

      <button onClick={goMedicines}>
        Go to Medicines
      </button>

    </div>
  );
}

const card = {
  background: "#ecf0f1",
  padding: "20px",
  borderRadius: "10px",
  width: "180px",
  textAlign: "center",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)"
};

export default Dashboard;