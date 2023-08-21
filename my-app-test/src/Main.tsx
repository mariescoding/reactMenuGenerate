import { MenuBar } from "./compoonents/MenuBar";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Generate } from "./pages/generate";
import { Browse } from "./pages/browse";

export const Main = () => {
  return (
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/" Component={Generate} />
      <Route path="/browse" Component={Browse} />
    </Routes>
  );
};
