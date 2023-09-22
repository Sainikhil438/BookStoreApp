import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import HeaderBar from './Components/Dashboard/HeaderBar';
import ActionCard from './Components/Dashboard/BookComponent';
import ForgotpwdAppBar from './Components/Pages/ForgotPassword/ForgotpwdAppBar';
import ForgotPassword from './Components/Pages/ForgotPassword/ForgotPassword';
import BookDetails from './Components/Dashboard/BookDetails';
import MyCartDetails from './Components/Dashboard/Cart/MyCartDetails';
import OrderSummary from './Components/Dashboard/Cart/OrderSummary';
import CustomerDetails from './Components/Dashboard/Cart/CustomerDetails';
import OrderPlaced from './Components/Dashboard/Cart/OrderPlaced';
import BookStoreRouter from './Components/Router/Router';

function App() {
  return (
    <div className="App">
      <BookStoreRouter/>
      {/* <HeaderBar/> */}
      {/* <SignUp/> */}
       {/* <SignIn/> */}
      {/* <ActionCard/> */}
      {/* <ForgotpwdAppBar/> */}
      {/* <ForgotPassword/> */}
      {/* <BookDetails/> */}
      {/* <MyCartDetails/> */}
      {/* <OrderSummary/> */}
      {/* <CustomerDetails/> */}
      {/* <OrderPlaced/> */}
    </div>
  );
}

export default App;
