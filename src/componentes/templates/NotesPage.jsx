import React from 'react';
import NoteCard from '../organisms/NoteCard';

function NotesPage() {
  return (
    <div className="notes-page">
      <NoteCard
        title="Agenda/Topic"
        code="SAAS-0000"
        description="Description of what is done here"
        date="3/8/2020"
        user="Daniel Catari (dani O_o)"
        userColor="orange"
      />
    </div>
  );
}
export default NotesPage;

