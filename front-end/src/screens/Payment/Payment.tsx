/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Payment.css";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import NewCategory from "../../assets/NewCategory";
import { useState } from "react";

function Payment() {
  const [valor, setValor] = useState("");

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

  return (
    <div className="container-payment">
      <Header title="Pagamento" />
      <form className="container-form">
        <div className="content-form">
          <label>Valor do Pagamento:</label>
          <Input placeholder="R$ 0,00" value={valor} onChange={handleChange} />
        </div>
        <div className="content-form">
          <label>Categoria</label>
          <div className="container-select">
            <select className="content-select">
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
          />
        </div>
        <button className="button" type="submit">Realizar Pagamento</button>
      </form>
    </div>
  );
}

export default Payment;
