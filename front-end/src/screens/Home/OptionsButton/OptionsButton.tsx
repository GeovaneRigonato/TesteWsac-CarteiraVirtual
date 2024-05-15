import "./OptionsButton.css";

interface OptionsButtonProps {
    icon: JSX.Element;
    text : string;
    onClick?: () => void;
}

function OptionsButton( {text, icon, onClick} : OptionsButtonProps) {
  return (
    <div className="container-button" onClick={onClick}>
      <div className="content-button">
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
}
export default OptionsButton;
