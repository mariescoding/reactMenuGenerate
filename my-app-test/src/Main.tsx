import { MenuBar } from "./compoonents/MenuBar";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";

import { Browse } from "./pages/browse";

export const Main = () => {
  return (
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/browse" Component={Browse} />
    </Routes>
  );
};
