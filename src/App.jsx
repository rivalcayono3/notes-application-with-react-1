import Header from "./components/template/Header";
import Body from "./components/template/Body";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
      id: 2,
      title: "Supeerr",
      body: "Avengers merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: true,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
  ]);

  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen bg-[#1B1A17]">
      <Header notes={notes} onChange={(e) => setSearchItem(e.target.value)} />
      <Body notes={notes} setNotes={setNotes} search={searchItem} />
    </div>
  );
}

export default App;
