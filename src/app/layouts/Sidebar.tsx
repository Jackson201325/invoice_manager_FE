import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = props => {
  return (
    <div
      style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}
    >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/admin/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
