import React, { useState, useEffect } from 'react';

function Sidebar() {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {

    fetch('/Data/sidebarData.json')
      .then(response => response.json())
      .then(data => setSocialLinks(data.socialLinks))
      .catch(error => console.error('Error loading sidebar data:', error));
  }, []);

  return (
    <aside className="sidebar">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + `/icons/${link.icon}`} alt={link.platform} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
