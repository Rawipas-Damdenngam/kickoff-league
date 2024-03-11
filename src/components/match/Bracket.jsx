import React from "react";
import Reacket from "reacket";

const match = [
  {
    id: 1,
    round: 1,
    match: 1,
    players: [
      {
        id: 1,
        name: "Team A",
      },
      {
        id: 2,
        name: "Team B",
      },
    ],
    score: [0, 1],
  },
  {
    id: 2,
    round: 1,
    match: 2,
    players: [
      {
        id: 3,
        name: "Team C",
        seed: 5,
      },
      {
        id: 4,
        name: "Team D",
        seed: 4,
      },
    ],
    score: [2, 3],
  },
  {
    id: 3,
    round: 1,
    match: 3,
    players: [
      {
        id: 5,
        name: "Team E",
      },
      {
        id: 6,
        name: "Team F",
      },
    ],
    score: [3, 5],
  },
  {
    id: 4,
    round: 1,
    match: 4,
    players: [
      {
        id: 7,
        name: "Team G",
      },
      {
        id: 8,
        name: "Team H",
      },
    ],
    score: [4, 2],
  },
  {
    id: 5,
    round: 2,
    match: 1,
    players: [
      {
        id: 2,
        name: "Team B",
      },
      {
        id: 4,
        name: "Team D",
      },
    ],
    score: [4, 6],
  },
  {
    id: 6,
    round: 2,
    match: 2,
    players: [
      {
        id: 6,
        name: "Team F",
      },
      {
        id: 7,
        name: "Team G",
      },
    ],
    score: [0, 1],
  },
  {
    id: 7,
    round: 3,
    match: 1,
    players: [
      {
        id: 4,
        name: "Team D",
      },
      {
        id: 7,
        name: "Team G",
      },
    ],
    score: [0, 1],
  },
];

export default function Bracket() {
  return <Reacket matches={match} />;
}
