import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "./AllMovements.css";
import Header from "../../components/Header/Header";

function AllMovements() {
  const [movements, setMovements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredMovements, setFilteredMovements] = useState([]);

  useEffect(() => {
    async function fetchMovements() {
      try {
        const response = await fetch(
          "http://localhost:3000/wallets/1/movements/all"
        );
        const data = await response.json();
        setMovements(data);
      } catch (error) {     
        console.error("Erro ao buscar os movimentos:", error);
      }
    }

    fetchMovements();
  }, []);
  useEffect(() => {
    let filtered: { category: string, type: string }[] = movements;

    if (selectedCategory !== "") {
      filtered = filtered.filter(
        (movement) => movement.category === selectedCategory
      );
    }

    if (selectedType !== "") {
      filtered = filtered.filter(
        (movement) => movement.type === selectedType
      );
    }

    setFilteredMovements(filtered);
  }, [selectedCategory, selectedType, movements]);

  const values = (filteredMovements as { value: number }[]).map((movement) => movement.value);
  const dates = (filteredMovements as { date: string }[]).map((movement) => movement.date);
  console.log(values, dates);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="container-output-graph">
      <Header title="Todas as movimentações" />
      <Plot
        className="plotly-graph"
        data={[
          {
            x: dates,
            y: values,
            type: "scatter",
            mode: "lines",
            marker: { color: "rgb(75, 192, 192)" },
          },
        ]}
        layout={{ width: 800, height: 400 }}
      />
      <div className="filter-selects">
        <div className="category-select">
          <label htmlFor="category">Categoria:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Todas as categorias</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Educação">Educação</option>
            <option value="Saúde">Saúde</option>
            <option value="Lazer">Lazer</option>
            <option value="Salário">Salário</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className="type-select">
          <label htmlFor="type">Tipo:</label>
          <select id="type" value={selectedType} onChange={handleTypeChange}>
            <option value="">Todos os tipos</option>
            <option value="deposit">Entrada</option>
            <option value="payment">Saída</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AllMovements;
