import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DepositIcon from '../../assets/Deposit';
import InputGraphIcon from '../../assets/InputGraph';
import OutputGraphIcon from '../../assets/OutputGraph';
import PayIcon from '../../assets/Pay';
import HistoryIcon from '../../assets/History';
import Header from '../../components/Header/Header';
import OptionsButton from './OptionsButton/OptionsButton';
import Balance from './Balance/Balance';
import './Home.css';

function Home() {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    async function fetchBalance() {
      try {
        const walletId=1;
        const response = await fetch(`http://localhost:3000/wallets/${walletId}`);
        const data = await response.json();
        // Supondo que o saldo esteja no formato { balance: "1000.98" }
        const formattedBalance = parseFloat(data.balance).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        setBalance(formattedBalance);
      } catch (error) {
        console.error('Erro ao buscar o saldo:', error);
      }
    }

    fetchBalance();
  }, []);

  return (
    <div className="container-home">
      <Header title="Olá Geovane" description="Bem vindo novamente!" />
      <div className="content-home">
        {balance && <Balance balance={balance} />}
        <div className="content-options">
          <Link className="link" to="/payment">
            <OptionsButton icon={<PayIcon />} text="Pagar" />
          </Link>
          <Link className="link" to="/deposit">
            <OptionsButton icon={<DepositIcon />} text="Depositar" />
          </Link>
          <Link className="link" to="/latest-10-movements">
            <OptionsButton icon={<OutputGraphIcon />} text="Gráficos" />
          </Link>
          <Link className="link" to="/history">
            <OptionsButton icon={<HistoryIcon />} text="Histórico" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
