import { useState } from "react";
import FormNotes from "../fragment/FormNotes";
import NoteActive from "../fragment/NoteActive";
import Card from "../fragment/Card";
import NoteArchived from "../fragment/NoteArchived";

function Body({ notes, setNotes, search, ...props }) {
  // console.log(notes);

  return (
    <div className="">
      <FormNotes notes={notes} setNotes={setNotes}>
        <NoteActive notes={notes} setNotes={setNotes} search={search} />
        <NoteArchived notes={notes} setNotes={setNotes} search={search} />
      </FormNotes>
    </div>
  );
}

export default Body;
