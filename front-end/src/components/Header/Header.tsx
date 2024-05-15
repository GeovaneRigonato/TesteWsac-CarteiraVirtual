import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="content-image">
        <img width={20} src="../../public/Search.png" alt="" />
      </div>

      <div className="content-image">
        <img width={20} src="../../public/Notifications.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
