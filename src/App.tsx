import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider ,useAuth} from './context/AuthContext.jsx';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Suggestions from "./components/Suggestions"
import OrderDetails from "./components/OrderDetails"
import LogIn from './components/LogIn';
import useUser from './hooks/useUser.js';
import Logout from './components/LogOut.js';

function App() {
  const { currentUser } = useAuth();
 


  const { user, loading } = useUser();

  // console.log(user);
  console.log(currentUser);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <Router>
    
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />        <Route path="/login" element={<LogIn />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/order-details" element={<OrderDetails />} />     <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

    </Router>

  );
}

export default App;

