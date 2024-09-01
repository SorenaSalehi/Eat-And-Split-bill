import { useState } from "react";
import Button from "./button";

export default function FormAddFriend({onAddFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if(!name || !image) return 
    //unique ID
    const id = crypto.randomUUID();

    //newFriend:
    const NewFriend = {
      id,
      name:name,
      image:`${image}?=${id}`,
      balance: 0,
    };
    //add to list
    onAddFriend(NewFriend)
    //default
    setName('')
    setImage("https://i.pravatar.cc/48")
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

      <label>🌄 Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
      <Button>add</Button>
    </form>
  );
}
