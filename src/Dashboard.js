import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">Dashboard</div>
        <div className="status-boxes">
          <div className="box blue">Materials: 120</div>
          <div className="box green">Orders: 75</div>
          <div className="box red">Alerts: 5</div>
        </div>
        <div className="notifications">
          <h3>Notifications</h3>
          <ul>
            <li>New material added</li>
            <li>Order #1234 processed</li>
            <li>Low stock alert for item #5678</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
