import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import AddService from "./pages/Dashboard/AddService/AddService";
import Book from "./pages/Dashboard/Book/Book";
import BookingList from "./pages/Dashboard/BookingList/BookingList";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageService from "./pages/Dashboard/ManageService/ManageService";
import OrderList from "./pages/Dashboard/OrderList/OrderList";
import Review from "./pages/Dashboard/Review/Review";
import Services from "./pages/Home/Service/Services";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* dashboard */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="addService" element={<AddService />} />
          <Route path="book" element={<Book />} />
          <Route path="bookingList" element={<BookingList />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="manageService" element={<ManageService />} />
          <Route path="orderList" element={<OrderList />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
