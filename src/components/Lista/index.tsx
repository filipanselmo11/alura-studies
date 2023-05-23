import Item from './Item';
import style from './lista.module.scss'
const Lista = () => {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JS",
      tempo: "01:00:00",
    },
    {
      tarefa: "Angular",
      tempo: "02:00:00",
    },
    {
      tarefa: "TS",
      tempo: "03:00:00",
    },
  ];
  return (
    <div>
      <aside className={style.listaTarefas}>
        <h2>Estudos do Dia</h2>
        <ul>
          {tarefas.map((item, index) => (
            <Item
              key={index}
              tarefa={item.tarefa}
              tempo={item.tempo}
            />
            // <Item {...item}/> -> Forma Alternativa
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Lista;
