
import style from './botao.module.scss'
import { IBotao } from '../../interfaces/IBotao'

const Botao = (props: IBotao) => {
    // const color = 'red'
    // const ativo = false;
    // const styles = {
    //     backgroundColor: ativo ? 'green' : 'red'
    // }
    return (
        <div>
            <button className={style.botao}>
                {props.children}
            </button>
        </div>
    )
}

export default Botao