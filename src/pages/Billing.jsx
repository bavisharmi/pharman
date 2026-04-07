  import { useState } from "react";

function Billing() {

  const [customer, setCustomer] = useState("");
  const [medicine, setMedicine] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const [billItems, setBillItems] = useState([]);

  // NEW → medicine list (sample stock)
  const medicines = [
    { name: "Paracetamol", price: 10, stock: 50 },
    { name: "Crocin", price: 12, stock: 30 },
    { name: "Dolo 650", price: 15, stock: 20 }
  ];

  const addItem = () => {

    if (medicine === "" || price === "" || qty === "") {
      alert("Enter all fields");
      return;
    }

    // NEW → check stock
    const selectedMed = medicines.find(m => m.name === medicine);

    if (selectedMed && qty > selectedMed.stock) {
      alert("Not enough stock available!");
      return;
    }

    const total = price * qty;

    const item = {
      customer,  
      medicine,
      price,
      qty,
      total
    };

    setBillItems([...billItems, item]);

    setCustomer("");
    setMedicine("");
    setPrice("");
    setQty("");
  };

  const grandTotal = billItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div style={container}>

      <h2>Pharmacy Billing</h2>

      <div style={formBox}>

        <input
          type="text"
          placeholder="Customer Name"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          style={input}
        />

        {/* CHANGED → Medicine Dropdown */}
        <select
          value={medicine}
          onChange={(e) => {
            setMedicine(e.target.value);

            const med = medicines.find(m => m.name === e.target.value);
            if (med) {
              setPrice(med.price);
            }
          }}
          style={input}
        >
          <option value="">Select Medicine</option>
          {medicines.map((med, index) => (
            <option key={index} value={med.name}>
              {med.name}
            </option>
          ))}
        </select>

        {/* Price auto filled */}
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={input}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={input}
        />

        <button style={button} onClick={addItem}>
          Add to Bill
        </button>

      </div>

      <h3>Bill Details</h3>

      <table style={table}>

        <thead>
          <tr>
            <th style={th}>Customer</th>
            <th style={th}>Medicine</th>
            <th style={th}>Price</th>
            <th style={th}>Qty</th>
            <th style={th}>Total</th>
          </tr>
        </thead>

        <tbody>

          {billItems.map((item, index) => (
            <tr key={index}>
               <td style={td}>{item.customer}</td> 
              <td style={td}>{item.medicine}</td>
              <td style={td}>₹{item.price}</td>
              <td style={td}>{item.qty}</td>
              <td style={td}>₹{item.total}</td>
            </tr>
          ))}

        </tbody>

      </table>

      <h2 style={total}>Grand Total : ₹{grandTotal}</h2>

    </div>
  );
}

const container = {
  padding: "40px",
  background: "#f4f6f9",
  minHeight: "100vh",
  fontFamily: "Arial"
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
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: "10px",
  background: "#27ae60",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const table = {
  width: "100%",
  background: "white",
  borderCollapse: "collapse",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.1)"
};

const th = {
  border: "1px solid #ddd",
  padding: "12px",
  background: "#2c3e50",
  color: "white"
};

const td = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center"
};

const total = {
  marginTop: "20px",
  color: "#27ae60"
};

export default Billing;