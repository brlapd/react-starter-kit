import "./tailwind.css"
import Button from "./Button";

function MyTab() {

  const todos = ["todo1", "todo2", "todo3"];

  return (
    <main>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>biliste.com.tr</h1>
      <div style={{ padding: "10px" }}>
        <Button>buton örneği</Button>
        <Button variant="success">buton örneği</Button>
        <Button variant="warning">buton örneği</Button>
        <Button variant="danger">buton örneği</Button>
        <Button variant="info">buton örneği</Button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}

export default MyTab;
