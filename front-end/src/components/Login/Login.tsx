import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

  return (
    <div className="login-container">
      <div className="circle">
        <h1>G</h1>
      </div>
      <h2>Olá Geovane</h2>
      <form>
        <div className="input-container">
          <input
            type="password"
            placeholder="Senha"
            className="input-password"
          />
          <Link to="/home" className="login-button">
            Entrar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
