/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Deposit.css";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import NewCategory from "../../assets/NewCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deposit() {
  const [valor, setValor] = useState("");
  const [category, setCategory] = useState("");
  const [observation, setObservation] = useState("");
  const history = useNavigate();

  const handleChange = (event) => {
    const inputValor = event.target.value;
    const numericValue = parseFloat(inputValor.replace(/[^\d]/g, ""));
    const formattedValor = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numericValue / 100);

    setValor(formattedValor);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        value: parseFloat(valor.replace(/[^\d,]/g, "").replace(",", ".")),
        category,
        observation,
        walletId: 1,
      };

      const response = await fetch("http://localhost:3000/movements/deposit/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Depósito realizado com sucesso!");
        history("/home");
      } else {
        console.error("Erro ao realizar o depósito:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao realizar o depósito:", error);
    }
  };

  return (
    <div className="container-deposit">
      <Header title="Depósito" />
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="content-form">
          <label>Valor do Depósito:</label>
          <Input placeholder="R$ 0,00" value={valor} onChange={handleChange} />
        </div>
        <div className="content-form">
          <label>Categoria</label>
          <div className="container-select">
            <select className="content-select" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="Recebimento">Recebimento</option>
              <option value="Vale">Vale</option>
              <option value="Salário">Salário</option>
              <option value="Cobrança">Cobrança</option>
            </select>
            <NewCategory title="Criar nova Categoria"/>
          </div>
        </div>
        <div className="content-form">
          <label>Observação</label>
          <textarea
            className="input-observation"
            placeholder="Digite uma observação..."
            value={observation}
            onChange={(event) => setObservation(event.target.value)}
          />
        </div>
        <button className="button" type="submit">Realizar Depósito</button>
      </form>
    </div>
  );
}

export default Deposit;
