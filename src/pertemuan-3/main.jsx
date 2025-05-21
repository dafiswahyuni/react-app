import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import UserFrom from "./UserFrom";
import HitungGajiForm from "./HitungGajiForm";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <div>
    <TailwindCSS/>
    <UserFrom/>
    <HitungGajiForm/>
  </div>
);
