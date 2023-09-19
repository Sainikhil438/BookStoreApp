import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import HeaderBar from './Components/Dashboard/HeaderBar';
import ActionCard from './Components/Dashboard/BookComponent';
import ForgotpwdAppBar from './Components/Pages/ForgotPassword/ForgotpwdAppBar';
import ForgotPassword from './Components/Pages/ForgotPassword/ForgotPassword';
import BookDetails from './Components/Dashboard/BookDetails';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <ActionCard/> */}
      {/* <ForgotpwdAppBar/> */}
      {/* <ForgotPassword/> */}
      <BookDetails/>
    </div>
  );
}

export default App;
