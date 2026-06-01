import "./Features.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Features() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2.222</span>
          <span className="featureRate">
            -11.5 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2.222</span>
          <span className="featureRate">
            -11.5 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2.222</span>
          <span className="featureRate">
            -11.5 <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">Compared last month</span>
      </div>
    </div>
  );
}
