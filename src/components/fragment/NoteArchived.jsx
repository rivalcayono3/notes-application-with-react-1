import Button from "../element/Button";
import Card from "./Card";

function NoteArchived({ notes, setNotes, search, ...props }) {
  const tanggal = (e) => {
    const date = new Date(e);
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const formattedDate = `${days[date.getUTCDay()]}, ${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    return formattedDate;
  };

  function handleRemoveNote(id) {
    const removeNotes = notes.filter((list) => list.id !== id);
    setNotes(removeNotes);
  }

  function handleActive(id) {
    const updateNote = notes.map((note) => {
      if (id === note.id) {
        return {
          ...note,
          archived: false,
        };
      }
      return note;
    });
    setNotes(updateNote);
    console.log(id);
  }
  const allArchived = notes.every((note) => !note.archived);

  console.log(notes);
  return (
    <>
      <h1 className="w-auto py-5 text-2xl text-left text-white">Note Archived</h1>
      <div className="max-w-6xl mb-10">
        {allArchived ? (
          <p className="text-left">Tidak ada catatan</p>
        ) : (
          <div className="grid grid-cols-4 gap-5 max-[640px]:grid-cols-2">
            {notes
              .filter((note) => {
                return search.toLowerCase() === "" ? note : note.title.toLowerCase().includes(search);
              })
              .map((list) =>
                list.archived ? (
                  <Card key={list.id} judul={list.title} time={tanggal(list.createdAt)} content={list.body}>
                    <Button title="Delete" onClick={() => handleRemoveNote(list.id)} />
                    <Button title="Move" onClick={() => handleActive(list.id)} />
                  </Card>
                ) : null
              )}
          </div>
        )}
      </div>
    </>
  );
}

export default NoteArchived;
