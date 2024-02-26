import { createContext, useState } from "react";

export const TeamContext = createContext();

export default function TeamProvider(props) {
  const [teams, setTeams] = useState(['']);

  const teamCreate = (name) => {
    setTeams((prev) => [...prev, name]);
    console.log("success");
  };
  const value = { teamCreate, teams };
  return (
    <TeamContext.Provider value={value}>
      {props.children}
    </TeamContext.Provider>
  );
}
