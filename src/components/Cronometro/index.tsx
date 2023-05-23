import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.scss'

const Cronometro = () => {
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e incie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio/>
        </div>
        <Botao>
            Começar
        </Botao>
    </div>
  );
};

export default Cronometro;
