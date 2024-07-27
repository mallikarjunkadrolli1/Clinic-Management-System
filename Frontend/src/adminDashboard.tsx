// src/Pages/AdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import './adminDashboard.css'; // Import a CSS file for styling

interface Appointment {
  _id: string;
  _doctor: string;
  _appDate: string;
  _appTime: string;
  _bookDate?: string;
  _bookTime?: string;
  _name?: string;
}

interface ApiResponse {
  message: string;
  data: Appointment[];
}

const AdminDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [doctorName, setDoctorName] = useState<string>('');
  const [doctorEmail, setDoctorEmail] = useState<string>('');
  const [doctorSpecialty, setDoctorSpecialty] = useState<string>('');
  const [doctorPassword, setDoctorPassword] = useState<string>('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3001/api/appointment/getAllAppointments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: ApiResponse = await response.json();
        setAppointments(result.data);
      } catch (error) {
        setError('Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleAddDoctor = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:3001/api/doctor/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _name: doctorName,
          _email: doctorEmail,
          _speciality: doctorSpecialty,
          _password: doctorPassword,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add doctor');
      }
      // Optionally, handle success, e.g., update the list or show a confirmation
      alert('Doctor added successfully');
      setDoctorName('');
      setDoctorEmail('');
      setDoctorSpecialty('');
      setDoctorPassword('');
    } catch (error) {
      setError('Failed to add doctor');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="appointments-container">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment._id}</td>
                <td>{appointment._doctor}</td>
                <td>{appointment._appDate}</td>
                <td>{appointment._appTime}</td>
                <td>{appointment._bookDate ?? 'N/A'}</td>
                <td>{appointment._bookTime ?? 'N/A'}</td>
                <td>{appointment._name ?? 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-doctor-form">
        <h3>Add New Doctor</h3>
        <form onSubmit={handleAddDoctor}>
          <label>
            Doctor Name:
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={doctorEmail}
              onChange={(e) => setDoctorEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Specialty:
            <input
              type="text"
              value={doctorSpecialty}
              onChange={(e) => setDoctorSpecialty(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={doctorPassword}
              onChange={(e) => setDoctorPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;


