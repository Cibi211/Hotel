// Dashboard.js
import React from "react";
import './Dashboard.css';

const rooms = [
  { id: 1, name: "Taj Hotel", price: 150, description: "A luxurious room with ocean view." },
  { id: 2, name: "Standard Room", price: 100, description: "A comfortable room with basic amenities." },
  { id: 4, name: "Park-Inn", price: 150, description: "A luxurious room with ocean view." },
  { id: 3, name: "Jungle Room", price: 250, description: "A spacious suite with premium services." },
  { id: 5, name: "Green Valley", price: 150, description: "A luxurious room with ocean view." },
];

// Header Component with custom styles for the Login button
const Header = ({ setPage }) => (
  <div className="header">
    <h1>Hotel Management System</h1>
    <div className="login-box">
      <button onClick={() => setPage("login")}>Login</button>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <div className="footer">
    <p>© 2024 Hotel Management System. All rights reserved.</p>
  </div>
);

const Dashboard = ({ setPage, setSelectedRoom }) => {
  const handleBookNow = (room) => {
    setSelectedRoom(room);  // Pass selected room to BookingForm
    setPage("bookingForm");  // Navigate to the booking form
  };

  return (
    <div>
      <Header setPage={setPage} />
      <div className="dashboard">
        <h2>Available Rooms</h2>
        <div className="room-grid">
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <h3>{room.name}</h3>
              <p>${room.price}/night</p>
              <p>{room.description}</p>
              <button onClick={() => handleBookNow(room)}>Book Now</button>
            </div>
          ))}
        </div>
        <button className="logout-button" onClick={() => setPage("login")}>
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
