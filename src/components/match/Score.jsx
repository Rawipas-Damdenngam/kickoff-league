import { Box, Grid } from "@mui/material";
import React from "react";
import "./Score.css";

export default function Score() {
  return (
    <Box
      sx={{
        p: `1rem`,
      }}
    >
      <Box>
        <table className="my-table">
          <tbody>
            <th style={{ width: `500px` }} colSpan={7}>
              {new Date().toDateString()}
            </th>
            <tr>
              <td
                style={{
                  width: `40px`,
                  height: `40px`,
                }}
              >
                <img
                  src="src/assets/images/liverPool.jpeg"
                  style={{
                    width: `100%`,
                    height: `100%`,
                    objectFit: `fill`,
                  }}
                ></img>
                <span>Team</span>A
              </td>
              <td>2</td>
              <td>3</td>
              <td
                style={{
                  width: `40px`,
                  height: `40px`,
                }}
              >
                <img
                  src="src/assets/images/manChest.jpeg"
                  style={{
                    width: `100%`,
                    height: `100%`,
                    objectFit: `fill`,
                  }}
                ></img>
                <span>Team</span>B
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: `40px`,
                  height: `40px`,
                }}
              >
                <img
                  src="src/assets/images/asenal.jpeg"
                  style={{
                    width: `100%`,
                    height: `100%`,
                    objectFit: `fill`,
                  }}
                ></img>
                <span>Team</span>A
              </td>
              <td>2</td>
              <td>3</td>
              <td
                style={{
                  width: `40px`,
                  height: `40px`,
                }}
              >
                <img
                  src="src/assets/images/chelsea.png"
                  style={{
                    width: `100%`,
                    height: `100%`,
                    objectFit: `fill`,
                  }}
                ></img>
                <span>Team</span>B
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: `40px`,
                  height: `40px`,
                }}
              >
                <img
                  src="src/assets/images/liverPool.jpeg"
                  style={{
                    width: `100%`,
                    height: `100%`,
                    objectFit: `fill`,
                  }}
                ></img>
                <span>Team</span>A
              </td>
              <td>2</td>
              <td>3</td>
              <td
                style={{
                  width: `40px`,
                  height: `40px`,
                }}
              >
                <img
                  src="src/assets/images/manCity.png"
                  style={{
                    width: `100%`,
                    height: `100%`,
                    objectFit: `fill`,
                  }}
                ></img>
                <span>Team</span>B
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
}
