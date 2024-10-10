import React, { useState, useEffect } from 'react';

function Header() {
  const [headerData, setHeaderData] = useState({ title: "", navLinks: [] });

  useEffect(() => {
    fetch('Data/headerData.json')
      .then(response => response.json())
      .then(data => setHeaderData(data));
  }, []);

  return (
    <header>
       {headerData.logo && (
        <img src={process.env.PUBLIC_URL + '/' + headerData.logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
      )}
      <nav>
        {headerData.navLinks.map((link, index) => (
          <a key={index} href={link.link}>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
