import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import  style  from './style.module.scss'

function App() {
  return (
    <>
      <div className={ style.AppStyle}>
        <h1>Alura Studies</h1>
        <Formulario />
        <Lista />
      </div>
    </>
  );
}

export default App;
