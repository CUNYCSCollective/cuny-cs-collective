import React, { useState } from "react";
import "../styles/events.css";

const Events = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };
  

  /* Placeholder data for testing purposes */
 /*
  const eventsData = {
    september: [
      { title: "Movie Night", time: "September 5, 2024 - 7:00 PM", location: "Main Quad" },
      { title: "Career Fair", time: "September 18, 2024 - 10:00 AM", location: "Student Center" }
    ],
    october: [
      { title: "Halloween Costume Contest", time: "October 31, 2024 - 5:00 PM", location: "Auditorium" }
    ]
  };
  */

  return (
    <div className="events-page">
      <h1>Events Page</h1>
      <div className="tabs">
        {Object.keys(eventsData).map((month) => (
          <div
            key={month}
            className={`tab ${activeTab === month ? 'active' : ''}`}
            onClick={() => toggleTab(month)}
          >
            <div className="tab-header">
              <h2>{month.charAt(0).toUpperCase() + month.slice(1)} 2024</h2>
              <span className={`arrow ${activeTab === month ? 'open' : ''}`}>▼</span>
            </div>
            <div
              className="content"
              style={{ maxHeight: activeTab === month ? '200px' : '0' }}
            >
              {eventsData[month].map((event, index) => (
                <div key={index} className="event-item">
                  <h3>{event.title}</h3>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
