import Chart from "../../components/topbar/chart/Chart";
import Features from "../../components/topbar/features/Features";
import "./Home.css";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title={"Month Sale"} data={xAxisData} dataKey={"Sale"} />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
}
