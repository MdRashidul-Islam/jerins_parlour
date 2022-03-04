import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AdminRoute from "./pages/Authentication/AdminRoute/AdminRoute";
import Login from "./pages/Authentication/Login/Login";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "./pages/Authentication/Register/Register";
import AddService from "./pages/Dashboard/AddService";
import BookingList from "./pages/Dashboard/BookingList";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageOrder from "./pages/Dashboard/ManageOrder";
import ManageService from "./pages/Dashboard/ManageService";
import Payment from "./pages/Dashboard/Payment";
import Review from "./pages/Dashboard/Review";
import WelcomePage from "./pages/Dashboard/WelcomePage";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/Home/Service/ServiceDetails";
import Services from "./pages/Home/Service/Services";

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

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
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
