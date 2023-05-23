import style from '../lista.module.scss'
const Item = (props: { tarefa: string, tempo: string}) => {
    // const [tarefa, tempo] = props
  return (
    <li className={style.item}>
      <h3>{props.tarefa}</h3>
      <span>{props.tempo}</span>
    </li>
  );
};

export default Item;
