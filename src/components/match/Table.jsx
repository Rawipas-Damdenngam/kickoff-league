import { Box } from "@mui/material";
import React from "react";
import "./Table.css";

export default function Table() {
  return (
    <Box sx={{ border: `1px solid`, width: `fit-content` }}>
      <table className="my-table">
        <tbody>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <td>none</td>
            <td>2-1</td>
            <td>2-1</td>
            <td>2-1</td>
          </tr>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <td>2-1</td>
            <td>none</td>
            <td>2-1</td>
            <td>2-1</td>
          </tr>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <td>2-1</td>
            <td>2-1</td>
            <td>none</td>
            <td>2-1</td>
          </tr>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <td>2-1</td>
            <td>2-1</td>
            <td>2-1</td>
            <td>none</td>
          </tr>
          <tr>
            <th></th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/defaultTeam.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
            </th>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
