import { useState, useMemo, useCallback } from "react";
import "./App.css";
import Button from "./components/Button";
import TextField from "./components/TextField";

interface Task {
  id: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(1);

  const completedTassks: boolean[] = useMemo(() => {
    return tasks
      .filter((task) => task.isCompleted)
      .map((task) => task.isCompleted);
  }, [tasks]);

  console.log(completedTassks);

  const handleButtonClick: () => void = useCallback(() => {
    return console.log("clicked");
  }, []);

  return (
    <div className="App">
      <header>
        <Button theme="light" onClick={handleButtonClick}>
          Enviar
        </Button>

        <TextField onChange={(e) => console.log(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
