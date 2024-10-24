import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import JobSearch from './Components/JobSearch';
import JobCategories from './Components/JobCategories';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <JobSearch />
      <JobCategories />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
