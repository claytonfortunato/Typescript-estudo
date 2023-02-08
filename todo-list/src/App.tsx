import { useState, FormEvent } from "react";
import { v4 } from "uuid";

import "./styles.scss";

interface ITodo {
  descricao: string;
  completo: boolean;
  id: string;
}

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    {
      descricao: "comprar pão",
      completo: false,
      id: "123456",
    },
  ]);
  const [descricao, setDescricao] = useState<string>("");
  const [filtros, setFiltros] = useState<"todos" | "paraFazer" | "completos">(
    "todos"
  );

  const handleTodo = (id: string) => {
    setTodo((prev) => {
      const novoValor = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completo: !todo.completo };
        }
        return todo;
      });
      return novoValor;
    });
  };

  const adicionarTodo = (e: FormEvent) => {
    e.preventDefault();

    if (!descricao) return alert("Favor preender a descrição!");

    setTodo((prev) => [
      ...prev,
      {
        descricao: descricao,
        completo: false,
        id: v4(),
      },
    ]);
    setDescricao("");
  };

  const filtraTodos = (filtro: string) => {
    if (filtro === "all") return todo;
    if (filtro === "paraFazer")
      return todo.filter((todo) => todo.completo === false);
    if (filtro === "completos")
      return todo.filter((todo) => todo.completo === true);
  };

  return (
    <div className="App">
      <header>Todo List</header>
      <main className="container">
        <nav>
          <li
            onClick={() => setFiltros("todos")}
            className={`${filtros === "todos" ? "filtroAtivo" : ""}`}
          >
            Todos
          </li>
          <li
            onClick={() => setFiltros("paraFazer")}
            className={`${filtros === "paraFazer" ? "filtroAtivo" : ""}`}
          >
            Para fazer
          </li>
          <li
            onClick={() => setFiltros("completos")}
            className={`${filtros === "completos" ? "filtroAtivo" : ""}`}
          >
            Completos
          </li>
        </nav>
        <form onSubmit={adicionarTodo}>
          <input
            type="text"
            placeholder="Adicionar detalhes"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <button>Adicionar</button>
        </form>
        <section className="todo-container">
          {todo &&
            filtraTodos(filtros)?.map(({ id, descricao, completo }) => (
              <div className="todo" key={id}>
                <input
                  type="checkbox"
                  id={id}
                  checked={completo}
                  onChange={() => handleTodo(id)}
                />
                <label htmlFor={id}>{descricao}</label>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;
