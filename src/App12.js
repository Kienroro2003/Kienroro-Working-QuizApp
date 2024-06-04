import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form name="form1" action="GET">
      <input type="hidden" name="url" value="1" />
      <input type="hidden" name="url" value="2" />
      <button>submit</button>
    </form>
  );
}

export default App;
