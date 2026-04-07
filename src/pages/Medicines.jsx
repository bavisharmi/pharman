 import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Medicines() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [expiry, setExpiry] = useState("");
  const [search, setSearch] = useState("");

  const [medicines, setMedicines] = useState([]);

  const addMedicine = () => {

    if (name === "" || price === "" || stock === "" || category === "" || expiry === "") {
      alert("Please fill all fields");
      return;
    }

    const newMedicine = {
      name,
      price,
      stock,
      category,
      expiry
    };

    setMedicines([...medicines, newMedicine]);

    setName("");
    setPrice("");
    setStock("");
    setCategory("");
    setExpiry("");
  };

  const getStatus = (date) => {
    const today = new Date();
    const expiryDate = new Date(date);
    const diff = (expiryDate - today) / (1000 * 60 * 60 * 24);

    if (diff < 0) return "🔴 Expired";
    if (diff <= 30) return "🟠 Expiring Soon";
    return "🟢 Safe";
  };

  return (
    <div style={container}>

      <h2>Medicines Management</h2>

      <div style={formBox}>

        <input
          type="text"
          placeholder="Medicine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={input}
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          style={input}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={input}
        >
          <option value="">Select Category</option>
          <option value="Tablet">Tablet</option>
          <option value="Syrup">Syrup</option>
          <option value="Injection">Injection</option>
          <option value="Capsule">Capsule</option>
          <option value="Ointment">Ointment</option>
        </select>

        <input
          type="date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          style={input}
        />

        <button style={button} onClick={addMedicine}>
          Add Medicine
        </button>

      </div>

      <input
        type="text"
        placeholder="Search Medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={searchInput}
      />

      <table style={table}>

        <thead>
          <tr>
            <th style={th}>Medicine</th>
            <th style={th}>Category</th>
            <th style={th}>Price</th>
            <th style={th}>Stock</th>
            <th style={th}>Expiry</th>
            <th style={th}>Status</th>
          </tr>
        </thead>

        <tbody>

          {medicines
            .filter((med) =>
              med.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((med, index) => (
              <tr key={index}>
                <td style={td}>{med.name}</td>
                <td style={td}>{med.category}</td>
                <td style={td}>₹{med.price}</td>

                <td style={{ ...td, color: med.stock < 10 ? "red" : "black" }}>
                  {med.stock}
                </td>

                <td style={td}>{med.expiry}</td>
                <td style={td}>{getStatus(med.expiry)}</td>
              </tr>
            ))}

        </tbody>

      </table>

      <br />

      <button
        style={billingButton}
        onClick={() => navigate("/billing")}
      >
        Go to Billing
      </button>

    </div>
  );
}

const container = {
  padding: "40px",
  background: "#f4f6f9",
  minHeight: "100vh"
};

const formBox = {
  background: "white",
  padding: "20px",
  width: "400px",
  borderRadius: "10px",
  marginBottom: "30px",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.1)"
};

const input = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const searchInput = {
  padding: "10px",
  width: "300px",
  marginBottom: "20px",
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

const billingButton = {
  padding: "10px 20px",
  background: "#27ae60",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const table = {
  width: "100%",
  background: "white",
  borderCollapse: "collapse"
};

const th = {
  border: "1px solid #ddd",
  padding: "10px",
  background: "#2c3e50",
  color: "white"
};

const td = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center"
};

export default Medicines;