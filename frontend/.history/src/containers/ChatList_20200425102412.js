import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChatList() {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    const userData = {
      email: "timothy.t.qin@gmail.com",
      password: "tq05112001"
    };
    axios
      .get("/user")
      .then(res => {
        setChatList(res.data.chatrooms);
        console.log(JSON.stringify(res.data, null, 2));
      })
      .catch(err => console.error(err));
  }, []);
  return <div>{chatList.map}</div>;
}
