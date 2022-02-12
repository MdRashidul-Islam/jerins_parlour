import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import AddService from "./pages/Dashboard/AddService";
import Payment from "./pages/Dashboard/Payment";
import BookingList from "./pages/Dashboard/BookingList";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageService from "./pages/Dashboard/ManageService";
import ManageOrder from "./pages/Dashboard/ManageOrder";
import Review from "./pages/Dashboard/Review";
import Services from "./pages/Home/Service/Services";
import Home from "./pages/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ServiceDetails from "./pages/Home/Service/ServiceDetails";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import AdminRoute from "./pages/Authentication/AdminRoute/AdminRoute";
import WelcomePage from "./pages/Dashboard/WelcomePage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route
            path="serviceDetails/:_id"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* dashboard */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="addService"
              element={
                <AdminRoute>
                  <AddService />
                </AdminRoute>
              }
            />
            <Route path="payment" element={<Payment />} />
            <Route path="payment/:_id" element={<Payment />} />
            <Route path="bookingList" element={<BookingList />} />
            <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="manageService"
              element={
                <AdminRoute>
                  <ManageService />
                </AdminRoute>
              }
            />
            <Route
              path="manageOrder"
              element={
                <AdminRoute>
                  <ManageOrder />
                </AdminRoute>
              }
            />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
