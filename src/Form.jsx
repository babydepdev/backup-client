import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [payload, setPayload] = useState({
    path: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/backup", payload);
    console.log(res?.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Path"
          onChange={(e) => setPayload({ ...payload, path: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
