import {Routes, Route} from "react-router-dom"
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Payment from "./screens/Payment/Payment";
import Deposit from "./screens/Desposit/Deposit";
import OutputGraph from "./screens/OutputGraph/OutputGraph";
import InputGraph from "./screens/InputGraph/InputGraph";
import History from "./screens/History/History";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/output-graph" element={<OutputGraph/>} />
            <Route path="/input-graph" element={<InputGraph/>} />
            <Route path="/history" element={<History/>} />
        </Routes>
    )
}

export default MainRoutes;