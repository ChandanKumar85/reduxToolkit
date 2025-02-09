import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   });
    //
    // // // //
    //
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     setUsers(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     setLoading(false);
    //   });
    //
    // // // //
    //
    // async function fetchUsers() {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     if (!response.ok) throw new Error("Failed to load data");
    //     const data = await response.json();
    //     setUsers(data);
    //   } catch (error) {
    //     console.log(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchUsers();
    //
    // // // //
    //
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAPI;
