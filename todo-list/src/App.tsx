import { useState } from "react";

import "./styles.scss";

interface ITodo {
  descricao: string;
  completo: boolean;
  id: string;
}

function App() {
  return (
    <div className="App">
      <header>Todo List</header>
      <main className="container">
        <nav>
          <li>Todos</li>
          <li>Para fazer</li>
          <li>Completos</li>
        </nav>
        <form>
          <input type="text" placeholder="Adicionar detalhes" />
          <button>Adicionar</button>
        </form>
        <section className="todo-container">
          <div className="todo">
            <input type="checkbox" id="comprar pão" />
            <label htmlFor="comprar pão">comprar pão</label>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
