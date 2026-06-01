import Chart from "../../components/topbar/chart/Chart";
import Features from "../../components/topbar/features/Features";
import "./Home.css";
import { xAxisData } from "../../datas";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"Sale"} />
    </div>
  );
}
