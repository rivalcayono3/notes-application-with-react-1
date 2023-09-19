import { useEffect } from "react";
import Card from "./Card";
import Button from "../element/Button";

function NoteActive({ notes, setNotes, search, ...props }) {
  const tanggal = (e) => {
    const date = new Date(e);
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const formattedDate = `${days[date.getUTCDay()]}, ${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    return formattedDate;
  };

  function handleRemoveNote(id) {
    const removeNote = notes.filter((list) => list.id !== id);
    setNotes(removeNote);
  }

  function handleArchive(id) {
    const updateNote = notes.map((note) => {
      if (id === note.id) {
        return {
          ...note,
          archived: true,
        };
      }
      return note;
    });
    setNotes(updateNote);
  }

  const allArchived = notes.every((note) => note.archived);

  console.log(notes);
  return (
    <>
      <h1 className="w-auto py-5 text-2xl text-left text-white">Note Active</h1>
      <div className="max-w-6xl mb-10 sm:w-auto">
        {allArchived ? (
          <p className="text-left">Tidak ada catatan</p>
        ) : (
          <div className="grid grid-cols-4 gap-5 max-[640px]:grid-cols-2">
            {notes
              .filter((note) => {
                return search.toLowerCase() === "" ? note : note.title.toLowerCase().includes(search);
              })
              .map((list) =>
                list.archived ? null : (
                  <Card key={list.id} judul={list.title} time={tanggal(list.createdAt)} content={list.body}>
                    <Button title="Delete" onClick={() => handleRemoveNote(list.id)} />
                    <Button title="Archive" onClick={() => handleArchive(list.id)} />
                  </Card>
                )
              )}
          </div>
        )}
      </div>
    </>
  );
}

export default NoteActive;
