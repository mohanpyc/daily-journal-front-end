import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="homeContainer">

      {/* TOP SUMMARY */}
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

      {/* QUICK INPUT */}
      <section className="inputSection">

        <select className="typeSelect">
          <option>Transaction</option>
          <option>Note</option>
          <option>Diary</option>
        </select>

        <input
          className="textInput"
          type="text"
          placeholder="Write something..."
        />

        <button className="addBtn">+ Add</button>

      </section>

      {/* FILTER TABS */}
      <section className="tabSection">

        <button className="tab active">All</button>
        <button className="tab">Notes</button>
        <button className="tab">Diary</button>
        <button className="tab">Transactions</button>

      </section>

      {/* FEED */}
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