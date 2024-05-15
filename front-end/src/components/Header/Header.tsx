import "./Header.css";
import Circle from "../../assets/Circle";

interface HeaderProps {
  title?: string;
  description?: string;
}

function Header( { title, description }: HeaderProps) {
  return (
    <div className="container-header">
      <div className="content-image">
        <img width={20} src="/Search.png" alt="" />
      </div>

      <div className="container-circle">
        <Circle />
        <div className="content-circle">
          <h2>{title}</h2>
          <h5>{description}</h5>
        </div>
      </div>
      <div className="content-image">
        <img width={20} src="/Notifications.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
