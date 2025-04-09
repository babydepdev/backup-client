import axios from "axios";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:8000/backup", {
        responseType: "blob",
      });

      const blob = new Blob([res.data], { type: "application/x-tar" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
      link.download = `Backup_${dayOfWeek}.tar`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Download MongoDB Backup</button>
    </form>
  );
};

export default Form;