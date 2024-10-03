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
      <h1>{headerData.title}</h1>
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
