import React from 'react';
import Header from './components/Header'; 
import Sidebar from './components/sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
