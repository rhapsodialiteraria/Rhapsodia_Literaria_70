import React, { useState } from "react";
import "./GalleryTeam.css";

// Import gallery and team images
import gallery1 from "../../assets/Background3.svg";
import gallery2 from "../../assets/Background4.svg";
import gallery3 from "../../assets/Background5.svg";
import gallery4 from "../../assets/gallery10.svg";

import team1 from "../../assets/image1.svg";
import team2 from "../../assets/image2.svg";
import team3 from "../../assets/image3.svg";
import team4 from "../../assets/image4.svg";
import team5 from "../../assets/image5.svg";
import team6 from "../../assets/image6.svg";
import team7 from "../../assets/image7.svg";
import team8 from "../../assets/image8.svg";
import team9 from "../../assets/image9.svg";
import team10 from "../../assets/image10.svg";

const galleryImages = [gallery1, gallery4, gallery3, gallery2];

const teamMembers = [
    { id: "team1", name: "Very Rev Fr Philip Vaikathukaran", role: "Manager", image: team1, description: "St Aloysius College, Edathua" },
    { id: "team2", name: "Prof (Dr.) Indulal G", role: "Principal", image: team2, description: "St Aloysius College, Edathua" },
    { id: "team3", name: "Dr Santy Joseph", role: "Vice  Principal", image: team3, description: "St Aloysius College, Edathua" },
    { id: "team4", name: "Rev Fr Tijomon P Issac", role: "Bursar", image: team4, description: "St Aloysius College, Edathua" },
    { id: "team5", name: "Dr Gem Cherian", role: "Head of the Department", image: team5, description: "Department of English, St Aloysius College, Edathua" },
    { id: "team6", name: "Cibyna Thomas", role: "Faculty Co-ordinator", image: team6, description: "Department of English, St Aloysius College, Edathua" },
    { id: "team7", name: "Alex S Mathew", role: "Student Co-ordinator", image: team7, description: "Hosting and Compering Team, RL7.0, Department of English, St Aloysius College, Edathua" },
    { id: "team8", name: "Sharan R", role: "Student Co-ordinator", image: team8, description: "Event Logistics Team, RL7.0, Department of English, St Aloysius College, Edathua" },


    { id: "team9", name: "Anujith S", role: "Student Co-ordinator", image: team9, description: "Advertising and PR Team, RL7.0, Department of English, St Aloysius College, Edathua" },
    { id: "team10", name: "Melvin Sam", role: "Student Co-ordinator", image: team10, description: "Tech Support Team, RL7.0, Department of English, St Aloysius College, Edathua" },
];

const GalleryTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

    return (
        <div className="gallery-team">

            {/* === TEAM SECTION === */}
            <section id="team" className="team-section">
                <h1>Our Team</h1>
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="team-card"
                            onClick={() => setSelectedMember(member)}
                        >
                            <img src={member.image} alt={member.name} />
                            <div className="team-overlay">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>

                                {/* CLICK HERE TEXT */}
                                <span className="click-text">Click Here</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === TEAM POPUP === */}
            {selectedMember && (
                <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedMember.image} alt={selectedMember.name} />
                        <h2>{selectedMember.name}</h2>
                        <h4>{selectedMember.role}</h4>
                        <p>{selectedMember.description}</p>
                        <button onClick={() => setSelectedMember(null)}>Close</button>
                    </div>
                </div>
            )}

            {/* === GALLERY SECTION === */}
            <section id="gallery" className="gallery-section">
                <h1>Photo Gallery</h1>
                <div className="gallery-grid">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Gallery"
                            onClick={() => setSelectedGalleryImage(img)}
                        />
                    ))}
                </div>
            </section>

            {/* === GALLERY POPUP === */}
            {selectedGalleryImage && (
                <div className="modal-overlay" onClick={() => setSelectedGalleryImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedGalleryImage}
                            alt="Gallery Big"
                            style={{ width: "100%", borderRadius: "16px" }}
                        />
                        <button onClick={() => setSelectedGalleryImage(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryTeam;
