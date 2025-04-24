import Form from "./Form";
import Restore from "./Restore";
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <Form />
      <Restore />
    </div>
  );
};
export default App;
