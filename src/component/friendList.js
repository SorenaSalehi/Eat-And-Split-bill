import Friend from "./friend";
// import Button from "./button";



export default function FriendList({friends,onSelectedFriend,selectedFriend}) {
  // const friends = initialFriends;
  return (
    <ul>
      {friends.map((friends) => (
        <Friend friend={friends} key={friends.id} onSelected={onSelectedFriend} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
}
