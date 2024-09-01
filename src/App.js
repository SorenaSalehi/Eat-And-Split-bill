import { useState } from "react";
import FriendList from "./component/friendList";
import Button from "./component/button";
import FormAddFriend from "./component/formAddFriend";
import FormSplitBill from "./component/formSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  //cm(we want to keep all event handler in the App component)
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setShowAddFriend] = useState(false);

  //cm(we can not use onClick on this component because it is not html tag, so we pass it as a prop)
  function handleShowAddFriend() {
    setSelectedFriend(null);
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    //the correct way in React
    //creating a new array and add something to it
    setFriends((friends) => [...friends, friend]);
    //hide the form
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    //cm(using optional chaining because it can be null and make bug)
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    //hide the form
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    // console.log(value);
    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>
      <div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}
