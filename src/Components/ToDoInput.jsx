import { useState } from "react";
import Button from "./Button";

function ToDoInput() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data) {
      setTodo((prev) => [...prev, data]);
      setData("");
    }
  };

  const handleDelete = (index) => {
    setTodo((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleUpdate = (index) => {
    const newValue = prompt("Update your todo:", todo[index]);
    if (newValue) {
      setTodo((prev) =>
        prev.map((item, idx) => (idx === index ? newValue : item))
      );
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="mt-2 text-2xl font-semibold text-slate-800">To Do</h1>
      <div className="flex mt-5 items-center space-x-3 w-80">
        <input
          onChange={handleChange}
          value={data}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Type here..."
        />
        <Button text="Submit" onClick={handleSubmit} />
      </div>
      <div>
        {todo.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <li>{item}</li>
            <Button text="Update" onClick={() => handleUpdate(index)} />
            <Button text="Delete" onClick={() => handleDelete(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoInput;
