import React from 'react';
import UserTag from '../moleculas/User';

function NoteCard({ title, code, description, date, user, userColor }) {
  return (
    <div className="note-card">
      <div className="header">
        <span className="title">{title}</span>
        <span className="code">{code}</span>
      </div>
      <p>{description}</p>
      <div className="footer">
        <span>Last Updated: {date}</span>
        <UserTag username={user} color={userColor} />
      </div>
    </div>
  );
}

export default NoteCard;
