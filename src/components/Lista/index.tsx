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
            <li key={index} className={style.item}>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Lista;
