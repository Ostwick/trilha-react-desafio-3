import {
  BrowserRouter as Router, // Renomeado para clareza
  Routes,
  Route,
} from "react-router-dom";

import { Feed } from "./pages/feed"; // Página do Feed
import { Home } from './pages/home'; // Página Inicial
import { Login } from './pages/login'; // Página de Login
import { Signup } from './pages/signup'; // Página de Cadastro (nova)
import { GlobalStyle } from './styles/global'; // Estilos globais

function App() {
  return (
    <Router>
      <GlobalStyle /> {/* Estilos globais aplicados */}
      <Routes>
        {/* Rotas da aplicação */}
        <Route path="/" element={<Home />} /> {/* Página Inicial */}
        <Route path="/login" element={<Login />} /> {/* Página de Login */}
        <Route path="/feed" element={<Feed />} /> {/* Página do Feed */}
        <Route path="/signup" element={<Signup />} /> {/* Página de Cadastro */}
      </Routes>
    </Router>
  );
}

export default App;
