/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Payment.css";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import NewCategory from "../../assets/NewCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [valor, setValor] = useState("");
  const [category, setCategory] = useState("");
  const [observation, setObservation] = useState("");
  const navigate = useNavigate();

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
        walletId: 1, // Substitua pelo ID da carteira correto
      };

      // Envie a solicitação POST
      const response = await fetch(`http://localhost:3000/movements/payment/${data.walletId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Verifique se a solicitação foi bem-sucedida
      if (response.ok) {
        console.log("Pagamento realizado com sucesso!");
        // Redirecione para a página inicial após o pagamento ser realizado
        navigate("/home");
      } else {
        console.error("Erro ao realizar o pagamento:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao realizar o pagamento:", error);
    }
  };

  return (
    <div className="container-payment">
      <Header title="Pagamento" />
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="content-form">
          <label>Valor do Pagamento:</label>
          <Input placeholder="R$ 0,00" value={valor} onChange={handleChange} />
        </div>
        <div className="content-form">
          <label>Categoria</label>
          <div className="container-select">
            <select className="content-select" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Transporte">Transporte</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
              <option value="Lazer">Lazer</option>
              <option value="Outros">Outros</option>
            </select>
            <NewCategory title="Criar Nova Categoria" />
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
        <button className="button" type="submit">Realizar Pagamento</button>
      </form>
    </div>
  );
}

export default Payment;
