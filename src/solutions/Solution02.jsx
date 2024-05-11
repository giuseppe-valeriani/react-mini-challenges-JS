import { useState } from "react";

const list = [{ name: "lorem", id: window.crypto.randomUUID() }];

const Solution02 = () => {
  const [state, setState] = useState(list);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name: item, id: window.crypto.randomUUID() };
    setState((prev) => [...prev, newItem]);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const remove = (current) => {
    setState((prev) => prev.filter((el) => el.id != current));
  };

  return (
    <main style={{ margin: "16px" }}>
      <section>
        <h1>List</h1>
        <ul>
          {state.map((el) => (
            <li style={{ display: "flex", gap: "16px" }} key={el.id}>
              <div>{el.name}</div>
              <button onClick={() => remove(el.id)}>remove</button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <form style={{ display: "flex", gap: "16px" }} onSubmit={handleSubmit}>
          <input value={item} onChange={handleChange} type="text" />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </section>
    </main>
  );
};

export default Solution02;
