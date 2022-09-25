import {useState, React} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext.js';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [user, setUser] = useState(""); //creacion de estado user y su fn setUser para modificar el estado
  const login = (name) => {
    setUser(name); //fn para modificar estado user
  };

  const logout = () => {
    setUser(""); //fn para modificar estado user
  };

  const context= {
    user,
    login,
    logout
  }

  return (
    <BrowserRouter>
      <userContext.Provider value={context}>
        <Header />
        <Main />
        <Footer />
      </userContext.Provider>
    </BrowserRouter>
  );
}
export default App;
