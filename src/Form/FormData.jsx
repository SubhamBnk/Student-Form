import React from "react";

function FormData({ forms }) {
  return (
   
      <div className="border border-blue-600 p-4 rounded-lg text-center">
      <h2 className="font-bold text-xl text-blue-600">Form Data</h2>
      {forms.map((form, index) => (
        <div key={index} className="flex flex-col gap-2 text-xl">
          <p>Name: {form.name}</p>
          <p>Department: {form.department}</p>
          <p>College: {form.college}</p>
          <p>Year: {form.year}</p>
          <hr className="border-blue-400" />
        </div>
      ))}
    </div>
    
  );
}

export default FormData;
