import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  // Find Average
  const tipAvg = (yourTip + friendTip) / 2; // 10%

  // tipAvg of bill = e.g 10% of 100
  const totalTip = (tipAvg / 100) * bill;
  const totalBill = bill + totalTip;

  const handleReset = () => {
    setBill(0);
    setYourTip(0);
    setFriendTip(0);
  };

  return (
    <div>
      <input
        value={bill}
        type="text"
        placeholder="Enter your bill"
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <TipDropdown
        value={yourTip}
        title="How Much You Like"
        setState={setYourTip}
      />
      <TipDropdown
        value={friendTip}
        title="How Much You're Friend Like"
        setState={setFriendTip}
      />

      <ShowBill title="Current Bill" amount={bill} />
      <ShowBill title="Total Tip" amount={totalTip} />
      <p>----------------------------------------------</p>
      <ShowBill title="Total Bill" amount={totalBill} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function TipDropdown({ value, title, setState }) {
  return (
    <select value={value} onChange={(e) => setState(Number(e.target.value))}>
      <option>{title}</option>
      <option value={5}>You like 5%</option>
      <option value={10}>You like 10%</option>
      <option value={20}>You like 20%</option>
    </select>
  );
}

function ShowBill({ title, amount }) {
  return (
    <div className="bill">
      <p>{title}</p>
      <p>${amount}</p>
    </div>
  );
}
