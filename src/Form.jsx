import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [payload, setPayload] = useState({
    pathSource: "/tmp/50-cloud-init.yaml",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:8000/backup", {
        params: { pathSource: payload.pathSource },
        responseType: 'blob',
      });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(res.data);
      link.download = payload.pathSource.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="source">Path Source File</label>
        <input
          id="source"
          type="text"
          value={payload.pathSource}
          onChange={(e) => setPayload({ ...payload, pathSource: e.target.value })}
        />
        <button type="submit">Download File</button>
      </form>
    </>
  );
};

export default Form;