import Topbar from "./components/topbar/Topbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      {router}
    </>
  );
}
