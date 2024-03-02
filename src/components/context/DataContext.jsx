import React, { createContext, useState } from "react";
export const DataContext = createContext();

export  function DataProvider(props) {
  const [id, setId] = useState([]);

  const handleId = (id) => {
    setId(id);
  };

  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:8080/user/${id} `, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const valueToShare = {
    fetchUser,
    handleId,
    id,
  };

  return (
    <DataContext.Provider value={valueToShare}>
      {props.children}
    </DataContext.Provider>
  );
}
