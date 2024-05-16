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
    // Obtenha o valor do input
    const inputValor = event.target.value;

    // Verifique se o valor é numérico
    const numericValue = parseFloat(inputValor.replace(/[^\d]/g, ""));

    // Formate o valor como moeda (R$)
    const formattedValor = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numericValue / 100); // Divida por 100 para considerar os centavos

    // Atualize o estado do valor formatado
    setValor(formattedValor);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Crie o objeto de dados para enviar na solicitação POST
      const data = {
        value: parseFloat(valor.replace(/[^\d,]/g, "").replace(",", ".")),
        category,
        observation,
        walletId: 1,
      };

      // Envie a solicitação POST
      const response = await fetch("http://localhost:3000/movements/deposit/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Verifique se a solicitação foi bem-sucedida
      if (response.ok) {
        console.log("Depósito realizado com sucesso!");
        // Redirecione para a página inicial após o depósito
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
