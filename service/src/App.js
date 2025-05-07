import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationPage from './ReservationPage';
import MakeReservationPage from './MakeReservationPage';
import TableDetailsPage from './TableDetailsPage';
import ReservationTable from './ReservationTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReservationPage />} />
        <Route path="/make-reservation" element={<MakeReservationPage />} />
        <Route path="/" element={<ReservationTable />} />
        <Route path="/table-details" element={<TableDetailsPage />} />
        <Route path="/" element={<ReservationPage />} />
     </Routes>
    </Router>
  );
}

export default App;
