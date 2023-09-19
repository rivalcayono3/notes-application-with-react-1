import { useState } from "react";
import Button from "../element/Button";
import Input from "../element/Input";
import TextArea from "../element/TextArea";

function FormNotes({ children, notes, setNotes, ...props }) {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setTitle(inputValue);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title: title,
      body: e.target.textContent.value,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);

    setTitle("");
    e.target.textContent.value = "";
  };

  return (
    <div className="flex flex-col items-center mb-6 text-white mt-14">
      <form onSubmit={handleSumbit} className="flex flex-col max-w-[800px] gap-4 ">
        <h2 id="createNote" className="text-3xl">
          Buat catatan
        </h2>
        <p className="text-right">sisa karakter: {50 - title.length}</p>
        <Input type="text" placeholder={"Judul..."} name={"judul"} value={title} required="required" maxLength={50} onChange={handleTitleChange} />
        <TextArea name={"textContent"} />
        <Button type="sumbit" title="Create" />
      </form>
      {children}
    </div>
  );
}

export default FormNotes;
