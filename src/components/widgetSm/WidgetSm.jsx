import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";
import { newMembers } from "./../../datas";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.img} alt="Hwang In-ho" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
