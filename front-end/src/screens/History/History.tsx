/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./History.css";
import Transaction from "./Transaction/Transaction";

function History() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch(
          "http://localhost:3000/wallets/1/movements/all"
        );
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Erro ao buscar as transações:", error);
      }
    }

    fetchTransactions();
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const convertToCSV = (data: unknown[]) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => Object.values(row).join(",")).join("\n");
    return encodeURI(csvContent);
  };

  const downloadCSV = (data: unknown[]) => {
    const csvData = convertToCSV(data);
    const link = document.createElement("a");
    link.setAttribute("href", csvData);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(event.target.value);
    setSelectedMonth(month);
  };

  const filterTransactionsByMonth = (transaction: any) => {
    if (selectedMonth === null) {
      return true;
    }
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1;
    return transactionMonth === selectedMonth;
  };

  const handleDownloadCurrentMonth = () => {
    if (selectedMonth !== null) {
      const transactionsOfSelectedMonth = transactions.filter(
        filterTransactionsByMonth
      );
      downloadCSV(transactionsOfSelectedMonth);
    }
  };

  return (
    <div className="container-history">
      <Header title="Histórico de Transações" />
      <div className="content">
        <div className="month-selector">
          <label htmlFor="month">Selecione o mês:</label>
          <select
            className="content-select"
            id="month"
            value={selectedMonth === null ? "" : selectedMonth.toString()}
            onChange={handleMonthChange}
          >
            <option value="">Todos</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>
        {transactions.filter(filterTransactionsByMonth).map((transaction) => (
          <Transaction
            key={transaction.id}
            category={transaction.category}
            date={new Date(transaction.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
            type={transaction.type === "payment" ? "Pagamento" : "Recebimento"}
            value={formatCurrency(transaction.value)}
          />
        ))}
        <button
          className="button-download"
          onClick={handleDownloadCurrentMonth}
          disabled={selectedMonth === null}
        >
          Baixar transações desse mês
        </button>
        <button
          className="button-download"
          onClick={() => downloadCSV(transactions)}
        >
          Baixar todas as transações
        </button>
      </div>
    </div>
  );
}

export default History;
