import axios from "axios";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://172.20.10.3:8000/backup", {
        responseType: "blob",
      });

      const blob = new Blob([res.data], { type: "application/x-tar" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // ===== ปรับตรงนี้ =====
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const filename = `Backup_${year}-${month}-${day}-${hours}-${minutes}-${seconds}.tar`;

      link.download = filename;
      // ======

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