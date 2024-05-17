import "./Transaction.css";

interface TransactionProps {
    type: string;
    value: string;
    date: string;
    category: string;
}

function Transaction( data: TransactionProps) {
  return (
    <div className="container">
      <div className="container-transaction">
        <h3>{data.type}</h3>
        <div className="content-transaction">
          <span>{data.category}</span>
          <span>{data.value}</span>
        </div>
      </div>
      <span>{data.date}</span>
    </div>
  );
}

export default Transaction;
