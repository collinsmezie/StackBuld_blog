// components/UserList.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("https://hngxapi-kggb.onrender.com/api/users/");
        const response = await axios.get("/api/posts/read");
        const usersData = response.data;
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("API Request Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Listss</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
