import NavBar from "./Components/NavBar/NavBar";
import SobreNos from "./Components/sobrenos"; // Corrigido o nome do componente
import Suporte from "./Components/suporte/Suporte";
import './stylesheets/index.scss';

export default function App() {
  return (
    <>
      <NavBar />
      <SobreNos />
    </>
  );
}
