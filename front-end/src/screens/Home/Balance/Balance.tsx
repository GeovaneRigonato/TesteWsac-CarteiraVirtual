import { useState } from "react";
import OpenEyeIcon from "../../../assets/OpenEye";
import CloseEyeIcon from "../../../assets/CloseEye";
import "./Balance.css";

interface BalanceProps {
  balance: string;
}

const Balance = ({ balance }: BalanceProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance); 
  };

  return (
    <div className="container-balance">
      <div className="content-balance">
        <p className="balance">Saldo</p>
        <div className="content-money">
          {showBalance ? (
            <h3>{balance}</h3>
          ) : (
            <h3>R$ ●●●●●●●●●●</h3>
          )}
        </div>
      </div>
      <div className="balance-toggle-icon" onClick={toggleBalanceVisibility}>
        {/* Ícone de olho */}
        {showBalance ? <OpenEyeIcon /> : <CloseEyeIcon />}
      </div>
    </div>
  );
};

export default Balance;
