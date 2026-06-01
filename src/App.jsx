import SideBar from "./components/topbar/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import "./App.css";

export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}
