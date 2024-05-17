import {Routes, Route} from "react-router-dom"
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Payment from "./screens/Payment/Payment";
import Deposit from "./screens/Desposit/Deposit";
import Latest10Movements from "./screens/Latest10Movements/Latest10Movements";
import History from "./screens/History/History";
import AllMovements from "./screens/AllMovements/AllMovements";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/latest-10-movements" element={<Latest10Movements/>} />
            <Route path="/all-movements" element={<AllMovements/>} />
            <Route path="/history" element={<History/>} />
        </Routes>
    )
}

export default MainRoutes;