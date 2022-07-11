import styles from './App.module.css';
import Logo from './assets/rocket.svg';

import { PlusCircle, Trash } from 'phosphor-react';

import './global.css';

export function App() {
    return (
        <div>
            <header>
                <div className={styles.header}>
                    <img src={Logo} />
                    <p>
                        to<strong>do</strong>
                    </p>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.form}>
                    <form action=""></form>
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <div className={styles.footerButton}>
                        <button className={styles.button} type="submit">
                            Criar
                            <PlusCircle size={18} />
                        </button>
                    </div>
                </div>
            </main>

            <footer>
                <div className={styles.footer}>
                    <div className={styles.cabecalho}>
                        <p>
                            Tarefas Criadas <span>0</span>
                        </p>
                        <p>
                            Concluidas <span>0</span>
                        </p>
                    </div>

                    <div className={styles.task}>
                        <div>
                            <input id="checkboxId" type="checkbox" />
                            {/* <input
                                defaultChecked={task.isCompleted}
                                onChange={handleCheckCompletedTask}
                                id={`checkbox${task.id}`}
                                type="checkbox"
                            /> */}
                            <label htmlFor="checkboxId" />
                        </div>
                        <div>
                            <p>
                                Integer urna interdum massa libero auctor neque
                                turpis turpis semper. Duis vel sed fames
                                integer.
                            </p>
                        </div>
                        <button title="Deletar Tarefa">
                            <Trash size={18} />
                        </button>
                     </div>
                </div>
            </footer>
        </div>
    );
}
