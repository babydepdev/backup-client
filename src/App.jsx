import Backup from "./Backup";
import Restore from "./Restore";
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <Backup />
      <Restore />
    </div>
  );
};
export default App;
