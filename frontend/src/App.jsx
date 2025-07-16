import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import FamScholarship from './FamScholarship.jsx';
import Admin from './admin/Admin.jsx';
import Internship from './components/Internship.jsx';
import South_american_scholarship from './components/South_american_scholarship.jsx';
import Middle_eastScholarship from './components/Middle_eastScholarship.jsx';
import American_scholarship from './components/American_scholarship.jsx';
import Postdoc_scholarship from './components/Postdoc_scholarship.jsx';
import Summer_programe from './components/Summer_programe.jsx';
import Leadership_programe from './components/Leadership_programe.jsx';
import Exchange_projeme from './components/Exchange_projeme.jsx';
import Undergraduate_scholarship from './components/UnderGraduateScholarship.jsx';
import HighSchool_scholarship from './components/HighSchool_scholarship.jsx';
import European_scholarship from './components/Europiean_scholarship.jsx';
import African_scholarship from './components/African_scholarship.jsx';
import Master_scholarship from './components/Master_scholarship.jsx';
import Faq from './components/Faq.jsx';
import Australian_scholarship from './components/Australian_scholarship.jsx';
import PHD_scholarship from './components/PHD_scholarship.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Admin_dashboar from './admin/Admin_dashboar';
import Add_schoarship from './admin/Add_schoarship.jsx';
import Add_internship from './admin/Add_internship.jsx';
import Add_leadership from './admin/Add_leadership.jsx';
import Compition from './components/Compition.jsx';
import Asian_scholarship from './components/Asian_scholarship.jsx';
import Chinese_govt_sch from './components/Chinese_govt_sch.jsx';
import Message from './admin/Message.jsx';
import Bloge from './components/Bloge.jsx';
import Add_bloge from './admin/Add_bloge.jsx';
import Mange_scholarship from './admin/Mange_scholarship.jsx';
import Mange_bloge from './admin/Mange_bloge.jsx';
import axios from 'axios';
const App = () => {

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
         
        <Route path='/european-scholarship' element={<European_scholarship />} />
        <Route path="/" element={<Homepage />} />
        <Route path='/post-doct_scholarship' element={<Postdoc_scholarship />} />
        <Route path="/fascholarship" element={<FamScholarship />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/american-scholarship' element={<American_scholarship />} />
        <Route path='/middle_eastscholarship' element={<Middle_eastScholarship />} />
        <Route path='/south-american-scholarship' element={<South_american_scholarship />} />
        <Route path='/internship' element={<Internship />} />
        <Route path='/leadership-programe' element={<Leadership_programe />} />
        <Route path='/exchange-programe' element={<Exchange_projeme />} />
        <Route path='/undergraduate-scholarship' element={<Undergraduate_scholarship />} />
        <Route path='/high-school-scholarship' element={<HighSchool_scholarship />} />
        <Route path='/african-scholarship' element={<African_scholarship />} />
        <Route path='/australian-scholarship' element={<Australian_scholarship />} />
        <Route path='/master-scholarship' element={<Master_scholarship />} />
        <Route path='/phd-scholarship' element={<PHD_scholarship />} />
        <Route path='/summer-program' element={<Summer_programe />} />
        <Route path='/exchange-program' element={<Exchange_projeme />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin/admin_dashboard' element={<Admin_dashboar />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin/addScholarship' element={<Add_schoarship />} />
        <Route path="/europian-scholarship" element={<European_scholarship />} />
        <Route path='/admin/add_internship' element={<Add_internship />} />
        <Route path='/admin/add_leadership_data' element={<Add_leadership />} />
        <Route path='/leadership_programe' element={<Leadership_programe />} />
        <Route path='/competition' element={<Compition/>}/>
        <Route path='/asian_scholarship' element={<Asian_scholarship />} />
        <Route path='/chinese_govt_scholarship' element={<Chinese_govt_sch/>} />
        <Route path="/admin/get_message_contact" element={<Message/>}/>
        <Route path='/blogs' element={<Bloge/>}/>
         <Route path='/admin/add_blog' element={<Add_bloge/>}/>
         <Route path='/admin/manage_scholarships' element={<Mange_scholarship/>} />
         <Route path='/admin/delete_blog' element={<Mange_bloge/>}/>
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;