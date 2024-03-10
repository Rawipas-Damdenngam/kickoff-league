import { Bracket } from "react-brackets";

const rounds = [
  {
    title: "Round one",
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: "Team 1" }, { name: "Team 2" }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: "Team 3" }, { name: "Team 4" }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team 5" }, { name: "Team 6" }],
      },
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: "Team 7" }, { name: "Team 8" }],
      },
      {
        id: 33,
        date: new Date().toDateString(),
        teams: [{ name: "Team 5" }, { name: "Team 6" }],
      },
      {
        id: 44,
        date: new Date().toDateString(),
        teams: [{ name: "Team 7" }, { name: "Team 8" }],
      },
      {
        id: 33,
        date: new Date().toDateString(),
        teams: [{ name: "Team 5" }, { name: "Team 6" }],
      },
      {
        id: 44,
        date: new Date().toDateString(),
        teams: [{ name: "Team 7" }, { name: "Team 8" }],
      },
    ],
  },
  {
    title: "Round two",
    seeds: [
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: "Team 1" }, { name: "Team 3" }],
      },
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{ name: "Team 5" }, { name: "Team 8" }],
      },
      {
        id: 66,
        date: new Date().toISOString(),
        teams: [{ name: "Team 55" }, { name: "Team 88" }],
      },
      {
        id: 66,
        date: new Date().toDateString(),
        teams: [{ name: "Team 5" }, { name: "Team 8" }],
      },
    ],
  },
  {
    title: "Round three",
    seeds: [
      {
        id: 7,
        date: new Date().toDateString(),
        teams: [{ name: "Team 1" }, { name: "Team 8" }],
      },
      {
        id: 77,
        date: new Date().toDateString(),
        teams: [{ name: "Team 1" }, { name: "Team 8" }],
      },
    ],
  },
  {
    title: "Final",
    seeds: [
      {
        id: 8,
        date: new Date().toDateString(),
        teams: [{ name: "Team 1" }, { name: "Team 8" }],
      },
    ],
  },
];


export default function MatchBracket() {
    return <Bracket rounds={rounds} />;
}
