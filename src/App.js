import {useState, React} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext.js';
import {newsContext} from './context/newsContext.js'
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [user, setUser] = useState(""); //creacion de estado user y su fn setUser para modificar el estado
  const [news,setNews]= useState({})

  //Funciones para el user
  const login = (name) => {
    setUser(name); //fn para modificar estado user
  };

  const logout = () => {
    setUser(""); //fn para modificar estado user
  };

    //Funciones para las noticias

    const addNews = (contextNews) => {
      setNews(contextNews)
    }

  const context= {
    user,
    login,
    logout,
  }

  const contextNews ={
    news,
    addNews
  }

  return (
    <BrowserRouter>
      <div className="h-screen overflow-scroll">
        {/* h-screen = h-[100vh] para darle el total de altura de la pantalla  */}
        <userContext.Provider value={context}>
          <Header />
          <newsContext.Provider value={contextNews}>
            <Main />
          </newsContext.Provider>
          <Footer />
        </userContext.Provider>
      </div>
    </BrowserRouter>
  );
}
export default App;
