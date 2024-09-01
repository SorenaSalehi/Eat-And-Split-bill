import { useState } from "react";
import Button from "./button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [payedByUser, setPayedByUser] = useState("");
  const payedByFriend = bill ? bill - payedByUser : "";
  const [whoIsPayed, setWhoIsPayed] = useState("user");

  function handleWhoIsPayed(e) {
    e.preventDefault();

    if(!bill || !payedByUser) return
    
    onSplitBill(whoIsPayed === "user" ? payedByFriend : -payedByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleWhoIsPayed(e)}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>🤵 Your Expense</label>
      <input
        type="text"
        value={payedByUser}
        onChange={(e) =>
          setPayedByUser(+e.target.value > bill ? payedByUser : +e.target.value)
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={payedByFriend} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPayed}
        onChange={(e) => setWhoIsPayed(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
