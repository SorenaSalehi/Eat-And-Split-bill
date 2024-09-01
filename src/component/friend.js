import Button from "./button";

export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected': ''}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {Math.abs(friend.balance)}$ to {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      {/* <button className="button">select</button> */}

      <Button onClick={() => onSelected(friend)}>
        {/* //cm(using optional chaining because it can be null and make bug) */}
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
