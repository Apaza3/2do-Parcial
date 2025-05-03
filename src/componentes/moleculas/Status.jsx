import React from "react";

function Status({Status}){
    const statusColors={
        active: '#ff5f5f',
        future: '#9d5de7',
        completed: '#999999'
    };
    const bgColor = statusColors[Status.toLowerCase()] || '#cccccc';
    return (
        <span className="status-label" style={{ backgroundColor: bgColor }}>
          {Status.toUpperCase()}
        </span>
     );
    
}

export default Status;