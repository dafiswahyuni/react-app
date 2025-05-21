import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FrameworkList from "./frameworklist";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveTugas from "./ResponsiveTugas";
import Responsive from "./Responsive";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <FrameworkList/>  */}
     {/* <FrameworkListSearchFilter/>   */}
    {/* <Responsive/> */}
    <ResponsiveTugas/>
  </div>
);
