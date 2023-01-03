import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [oneTime, setOneTime] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios
      .get("http://localhost:8000/api/expenses/")
      .then((response) => setExpenses(response.data.expenses))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      axios
        .put(`http://localhost:8000/api/expenses/${id}/`, {
          name,
          amount,
          date,
          one_time: oneTime,
        })
        .then((response) => {
          setName("");
          setAmount(0);
          setDate("");
          setOneTime(false);
          setEditing(false);
          setId(null);
          fetchExpenses();
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:8000/api/expenses/", {
          name,
          amount,
          date,
          one_time: oneTime,
        })
        .then((response) => {
          setName("");
          setAmount(0);
          setDate("");
          setOneTime(false);
          fetchExpenses();
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/expenses/${id}/`)
      .then((response) => fetchExpenses())
      .catch((error) => console.log(error));
  };

  const handleEdit = (expense) => {
    setName(expense.name);
    setAmount(expense.amount);
    setDate(expense.date);
    setOneTime(expense.one_time);
    setEditing(true);
    setId(expense.id);
  };

  return (
    <div className="expense-tracker">
      <div className="form-container">
        <h2 className="expense-tracker__heading">
          {editing ? "Edit Expense" : "Add Expense"}
        </h2>
        <form onSubmit={handleSubmit} className="expense-tracker__form">
          <div className="form-style">
            <label className="expense-tracker__label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="expense-tracker__input"
            />
          </div>
          <label className="expense-tracker__label">Amount:</label>
          <input
            type="number"
            step="10"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="expense-tracker__input"
          />
          <div className="form-style">
            <label className="expense-tracker__label">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="expense-tracker__input"
            />
          </div>
          <div className="form-style-check">
            <label className="expense-tracker__label">
              One Time Expense
              <input
                type="checkbox"
                checked={oneTime}
                onChange={(event) => setOneTime(event.target.checked)}
                className="expense-tracker__input checkbox-style"
              />
            </label>
          </div>
          <div className="form-style">
            <button type="submit" className="expense-tracker__buttontop">
              {editing ? "Update Expense" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
      <table className="expense-tracker__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>One Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.one_time ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => handleEdit(expense)}
                  className="expense-tracker__buttonbot"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="expense-tracker__buttonbot"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTracker;
