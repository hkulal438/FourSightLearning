import React, { useState, useRef, useEffect } from "react";
import "../Team/Team.css";

const teamMembers = [
  {
    name: "Jane Doe",
    title: "Service Specialist",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet diam nec risus semper, a pretium nisi mollis. Vivamus non diam volutpat tortor porttitor rhoncus in non erat. Suspendisse potenti.`
  },
  {
    name: "John Doe",
    title: "Account Manager",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    desc: `Vivamus consectetur placerat mauris, at mollis dui suscipit ut. Donec imperdiet diam nec risus semper, a pretium nisi mollis.`
  },
  {
    name: "Emily Smith",
    title: "Team Lead",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    desc: `Suspendisse potenti. Curabitur odio tortor, lacinia at tempus vel, iaculis eget felis.`
  },
  {
    name: "Michael Brown",
    title: "Service Specialist",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur placerat mauris, at mollis dui suscipit ut.`
  }
];

const Team = () => {
  const [selected, setSelected] = useState(null);
  const infoRef = useRef(null); // reference to info box

  const handleSelect = (index) => {
    const newIndex = selected === index ? null : index;
    setSelected(newIndex);
  };

  // whenever selected changes, scroll to the info box if needed
  useEffect(() => {
    if (selected !== null && infoRef.current) {
      // smooth scroll to info section
      infoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selected]);

  return (
    <div className="team-wrapper">
      <div className="team-title">
        <h1>Meet the Team</h1>
        <p>Click on a photo to learn more</p>
      </div>

      {selected !== null && (
        <div className="team-info" ref={infoRef}>
          <div
            className="team-info-image"
            style={{ backgroundImage: `url(${teamMembers[selected].img})` }}
          ></div>
          <div className="team-info-details">
            <h2>{teamMembers[selected].name}</h2>
            <h3>{teamMembers[selected].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: teamMembers[selected].desc }} />
          </div>
        </div>
      )}

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-card ${selected === index ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          >
            <div className="image-container">
              <img src={member.img} alt={member.name} className="profile-image" />
              <div className="overlay">
                <div className="overlay-text">
                  <strong>{member.name}</strong>
                  <br />
                  {member.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {teamMembers.map((_, index) => (
          <span
            key={index}
            className={`dot ${selected === index ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Team;
