import { Box, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { TeamContext } from "../context/TeamContext";
import MyTeamShow from "./MyTeamShow";
import { useNavigate } from "react-router-dom";
import TeamInfo from "../../pages/TeamInfo";
import TeamCard from "./teamCard";

export default function MyteamList(props) {
  const { teams } = props;
  const day = new Date();
  const currentDay =
    day.getDate() + "/" + day.getMonth() + "/" + day.getFullYear();
  const navigate = useNavigate();

  const handleShowInfo = () => {
    <TeamInfo name={teams}></TeamInfo>;
    navigate("/teamInfo");
  };
  console.log(teams);

  return <TeamCard teams={teams} />;
}
