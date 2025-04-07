
import './App.css';
import {BrowserRouter as Router,} from "react-router-dom";
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
    
    <Router basename={process.env.NODE_ENV === "production" ? "/volvo_app" : "/"}>
      <Navbar />
      <AppRoutes />
      
    </Router>
    <Footer/>
  </>
  );
}

export default App;
