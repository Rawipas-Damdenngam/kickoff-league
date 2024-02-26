import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import News from "./pages/news.jsx";
import Schedule from "./pages/schedule.jsx";
import FindMatch from "./pages/FindMatch.jsx";
import FindTeam from "./pages/FindTeam.jsx";
import FindPeople from "./pages/FindPeople.jsx";
import Request from "./pages/Request.jsx";
import Scoreboard from "./pages/Scoreboard.jsx";
import MyTeam from "./pages/MyTeam.jsx";
import History from "./pages/History.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import Achievement from "./pages/Achievement.jsx";
import Home from "./pages/Home.jsx";
import TeamProvider from "./components/context/TeamContext.jsx";
import TeamInfo from "./pages/TeamInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/findMatch",
    element: <FindMatch />,
  },
  {
    path: "/findTeam",
    element: <FindTeam />,
  },
  {
    path: "/findPeople",
    element: <FindPeople />,
  },
  {
    path: "/request",
    element: <Request />,
  },
  {
    path: "/scoreBoard",
    element: <Scoreboard />,
  },
  {
    path: "/myTeam",
    element: <MyTeam />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/achievement",
    element: <Achievement />,
  },
  {
    path: "/teamInfo",
    element: <TeamInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <TeamProvider>
        <App />
      </TeamProvider>
    </RouterProvider>
  </React.StrictMode>
);
