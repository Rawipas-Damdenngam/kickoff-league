import React, { createContext, useState } from "react";
export const DataContext = React.createContext({
  id: "",
  user: {},
  handleId: () => {},
  handleUser: () => {},
  fetchUser: () => {},
});

// console.log("is this thing even working?");
// console.log(DataContext);

export function DataProvider(props) {
  const [user, setUser] = useState({});

  const handleId = (id) => {
    setId(id);
  };

  const handleUser = (user) => {
    console.log("Set user to", user);
    setUser(user);
  };

  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:8080/user/${id} `, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  console.log("is this thing even working?", user);

  return (
    <DataContext.Provider
      value={{
        fetchUser,
        handleId,
        id,
        user,
        handleUser,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
