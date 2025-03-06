import React from "react";
import "./Sidebar.scss";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="/profile.jpg" alt="Profile" className="avatar" />
                <h3>Alex Walker</h3>
                <p>UI/UX Designer & Frontend Developer</p>
                <p>Based in Odesa, Ukraine</p>
                <button className="work-btn">Let's Work Together</button>
            </div>
            <div className="social-links">
                {/* Add social media icons here */}
            </div>
        </div>
    );
}

export default Sidebar;
