import React, { useState } from 'react';
import './home.css';
import { handleJournalEntry } from '../context/userContext';

const Home = () => {
  const [userInp, setUserInp] = useState({
    inpType: 'transaction',
    inpValue: ''
  });

  const handleUserInp = (type, value) => {
    if (type === 'type') {
      setUserInp((prev) => ({
        ...prev,
        inpType: value
      }));
    }

    if (type === 'value') {
      setUserInp((prev) => ({
        ...prev,
        inpValue: value
      }));
    }
  };

  const handleSaveInp = () => {
    handleJournalEntry(userInp);
  };

  return (
    <div className="homeContainer">

      <section className="summarySection">
        <div className="summaryCard">
          <h3>🧾 Last Entry</h3>
          <p>Food expense at restaurant</p>
          <span>Today 10:30 AM</span>
        </div>

        <div className="summaryCard">
          <h3>🧠 Last Note</h3>
          <p>Learned React Context API</p>
          <span>Yesterday 8:00 PM</span>
        </div>

        <div className="summaryCard">
          <h3>⏰ Next Reminder</h3>
          <p>Pay electricity bill</p>
          <span>Tomorrow 9:00 AM</span>
        </div>
      </section>

      <section className="inputSection">
        <select
          className="typeSelect"
          value={userInp.inpType}
          onChange={(e) => handleUserInp('type', e.target.value)}
        >
          <option value="transaction">Transaction</option>
          <option value="note">Note</option>
          <option value="reminder">Reminder</option>
        </select>

        <input
          className="textInput"
          type="text"
          placeholder="Write something..."
          value={userInp.inpValue}
          onChange={(e) => handleUserInp('value', e.target.value)}
        />

        <button className="addBtn" onClick={handleSaveInp}>
          + Add
        </button>
      </section>

      <section className="tabSection">
        <button className="tab active">All</button>
        <button className="tab">Notes</button>
        <button className="tab">Diary</button>
        <button className="tab">Transactions</button>
      </section>

      <section className="feedSection">
        <div className="feedCard">💰 ₹200 Food Expense</div>
        <div className="feedCard">📝 React Context Notes</div>
        <div className="feedCard">📖 Daily Diary Entry</div>
        <div className="feedCard">💰 ₹500 Travel</div>
      </section>

    </div>
  );
};

export default Home;