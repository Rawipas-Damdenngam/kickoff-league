import { Box } from "@mui/material";
import React from "react";
import "./Table.css";

export default function Table() {
  return (
    <Box sx={{ width: `fit-content` }}>
      <table className="my-table" style={{ flex: `1 1 auto` }}>
        <tbody style={{}}>
          <tr style={{ flex: `1 1 auto` }}>
            <th
              style={{
                minWidth: `50px`,
                height: `50px`,
                alignItems: `center`,
              }}
            >
              <img
                src="src/assets/images/liverPool.jpeg"
                style={{
                  width: `100%`,
                  height: `100%`,
                  objectFit: `cover`,
                }}
              ></img>
              <span>Team</span>A
            </th>
            <td></td>
            <td style={{ backgroundColor: `lightgreen` }}>2-0</td>
            <td style={{ backgroundColor: `#ff8080` }}>2-3</td>
            <td style={{ backgroundColor: `#ffff99` }}>1-1</td>
            <td style={{ backgroundColor: `lightgreen` }}>2-1</td>
          </tr>
          <tr style={{ flex: `1 1 auto` }}>
            <th
              style={{
                minWidth: `50px`,
                height: `50px`,
                alignItems: `center`,
              }}
            >
              <img
                src="src/assets/images/manChest.jpeg"
                style={{
                  width: `100%`,
                  height: `100%`,
                  objectFit: `cover`,
                }}
              ></img>
              <span>Team</span>B
            </th>
            <td style={{ backgroundColor: `#ffff99` }}>1-1</td>
            <td></td>
            <td style={{ backgroundColor: `lightgreen` }}>2-1</td>
            <td style={{ backgroundColor: `#ff8080` }}>2-3</td>
            <td style={{ backgroundColor: `#ffff99` }}>2-2</td>
          </tr>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/manCity.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>C
            </th>
            <td style={{ backgroundColor: `#ff8080` }}>2-3</td>
            <td style={{ backgroundColor: `#ffff99` }}>1-1</td>
            <td></td>
            <td style={{ backgroundColor: `#ffff99` }}>2-2</td>
            <td style={{ backgroundColor: `lightgreen` }}>3-1</td>
          </tr>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/asenal.jpeg"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>D
            </th>
            <td style={{ backgroundColor: `lightgreen` }}>2-0</td>
            <td style={{ backgroundColor: `lightgreen` }}>3-1</td>
            <td style={{ backgroundColor: `#ff8080` }}>0-1</td>
            <td></td>
            <td style={{ backgroundColor: `#ffff99` }}>2-2</td>
          </tr>
          <tr>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/chelsea.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>E
            </th>
            <td style={{ backgroundColor: `#ffff99` }}>2-2</td>
            <td style={{ backgroundColor: `#ff8080` }}>1-3</td>
            <td style={{ backgroundColor: `lightgreen` }}>3-2</td>
            <td style={{ backgroundColor: `#ffff99` }}>1-1</td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/liverPool.jpeg"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>A
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/manChest.jpeg"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>B
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/manCity.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>C
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/asenal.jpeg"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>D
            </th>
            <th style={{ width: `50px`, height: `50px` }}>
              <img
                src="src/assets/images/chelsea.png"
                style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
              ></img>
              <span>Team</span>E
            </th>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
