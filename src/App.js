import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import MessBookingScreen from "./screens/MessBookingScreen";
import GymBookingScreen from "./screens/GymBookingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import LandingScreen from "./screens/LandingScreen";
import MaidScreen from "./screens/MaidScreen";
import MessScreen from "./screens/MessScreen";
import GymScreen from "./screens/GymScreen";
import Home1 from "./screens/Home";
import Owner from "./screens/Owner";
import FindRoomates from "./screens/FindRoomates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LaundaryScreen from "./screens/LaundaryScreen";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Navbar />
      <BrowserRouter>
        <Route path="/LandingScreen" exact component={LandingScreen} />
        <Route path="/home" exact component={Homescreen} />
        <Route
          path="/bookmess/:messid/:fromdate/:todate"
          exact
          component={MessBookingScreen}
        />
        <Route
          path="/bookgym/:gymid/:fromdate/:todate"
          exact
          component={GymBookingScreen}
        />
        <Route
          path="/book/:roomid/:fromdate/:todate"
          exact
          component={Bookingscreen}
        />

        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/bookings" exact component={ProfileScreen} />
        <Route path="/maid" exact component={MaidScreen} />
        <Route path="/admin" exact component={AdminScreen} />
        <Route path="/" exact component={Home1} />
        <Route path="/mess" exact component={MessScreen} />
        <Route path="/gym" exact component={GymScreen} />
        <Route path="/laundary" exact component={LaundaryScreen} />
        <Route path="/bookurpg" exact component={Owner} />
        <Route path="/roomates" exact component={FindRoomates} />
      </BrowserRouter>
    </div>
  );
}

export default App;
