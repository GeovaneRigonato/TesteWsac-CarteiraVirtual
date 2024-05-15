import DepositIcon from "../../assets/Deposit";
import InputGraphIcon from "../../assets/InputGraph";
import OutputGraphIcon from "../../assets/OutputGraph";
import PayIcon from "../../assets/Pay";
import Header from "../../components/Header/Header";
import OptionsButton from "./OptionsButton/OptionsButton";

import { Link } from "react-router-dom";
import HistoryIcon from "../../assets/History";
import Balance from "./Balance/Balance";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <Header title="Olá Geovane" description="Bem vindo novamente!" />
      <div className="content-home">
        <Balance balance={"1.000,98"} />
        <div className="content-options">
          <Link className="link" to={"/payment"}>
            <OptionsButton icon={<PayIcon />} text={"Pagar"} />
          </Link>
          <Link className="link" to={"/deposit"}>
            <OptionsButton icon={<DepositIcon />} text={"Depositar"} />
          </Link>
          <Link className="link" to={"/output-graph"}>
            <OptionsButton icon={<OutputGraphIcon />} text={"Gráfico Saída"} />
          </Link>
          <Link className="link" to={"/input-graph"}>
            <OptionsButton icon={<InputGraphIcon />} text={"Gráfico Entrada"} />
          </Link>
          <Link className="link" to={"/history"}>
            <OptionsButton icon={<HistoryIcon />} text={"Histórico"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
