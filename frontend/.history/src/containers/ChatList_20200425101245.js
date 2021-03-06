import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChatList() {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    axios.get("/chat").then(res => {
      console.log(res.data);
      setChatList(res.data);
    });
  }, []);
  return <div>{Object.toString(chatList)}</div>;
}
