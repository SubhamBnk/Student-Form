import React, { useState } from "react";
import Input from "./InputField";
import FormData from "./FormData";
import "./form.css";

function Form() {
  const [forms, setForms] = useState([]);
  const [form, setForm] = useState({
    name: "",
    department: "",
    college: "",
    year: "",
  });

  const onChange = (value) => {
    setForm({ ...value });
  };

  return (

    <div className="mx-2 md:w-1/2 lg:w-1/3 w-full m-2">
      <h1 className="new-class">Student Form</h1>
      <Input key={"name"} name="name" form={form} onChangeCB={onChange} />
      <Input key={"department"} name="department" form={form} onChangeCB={onChange} />
      <Input key={"college"} name="college" form={form} onChangeCB={onChange} />
      <Input key={"year"} name="year" form={form} onChangeCB={onChange} />
      <div className="mb-4">
        <button
        className="my-class"
        onClick={() => {
          setForms([...forms, form]);
          setForm({
            name: "",
            department: "",
            college: "",
            year: "",
          });
        }}
      >
        Submit
      </button>
      </div>
      <div className="w-1/3"></div>
      <FormData forms={forms} />
    </div>
  );
}

export default Form;
