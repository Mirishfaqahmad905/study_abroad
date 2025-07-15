import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logoutAdmin } from "../redux/stateSlice";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
const dispatch=useDispatch();
const navigaite=useNavigate();
const navbarShow_condition= useSelector((state)=>state.admin.isAdminLoggedIn);
  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
 const Logout_admin = ()=>{
    dispatch(logoutAdmin());
    navigaite('/')
 }
  return (
 <>
 {navbarShow_condition ? 
 (<>  
 
<div className="flex justify-end">
  <button
    onClick={Logout_admin}
    className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out"
  >
    Logout
  </button>
</div>


 
  </>):



 (<>
 
 <header className="bg-black text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
  <Link to="/" className="flex items-center space-x-2">
    <img
      src="https://invent.studyabroad.pk/ckfinder/userfiles/images/scholarship.jpeg"
      alt="StudyAbroadGo"
      className="h-12 w-12 object-cover rounded-full shadow-lg border-2 border-white transition-transform duration-300 hover:scale-105"
      loading="lazy"
    />
    <span className="text-xl font-bold text-white tracking-wide">
      studyAbroadGo
    </span>
  </Link>
</div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
              aria-label="Open main menu"
            >
              {/* Three horizontal dashes */}
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 items-center font-medium text-sm">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            </li>
            {/* Opportunity Dropdown */}
            <li className="relative">
              <button
                className="hover:text-gray-300 flex items-center transition-colors focus:outline-none"
                onClick={() => handleDropdown("opportunity")}
                type="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === "opportunity"
                  // Add any additional attributes or state here
}
              > 
              Opportunity
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown */}
              {openDropdown === "opportunity" && (
                <ul
                  className="absolute left-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg z-20"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <li>
                    <Link to="/chinese_govt_scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>chinese government scholarship</Link>
                  </li>
                  <li>
                    <Link to="/summer-program" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Summer Program</Link>
                  </li>
                   <li>
                     <Link to="/competition" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Competition</Link>
                   </li>
                   <li>
                     <Link to="/exchange-program" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Exchange Program</Link>
                   </li>
                   <li>
                     <Link to="/leadership_programe" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Leadership Program</Link>
                   </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/fascholarship" className="hover:text-gray-300 transition-colors">Famous Scholarship</Link>
            </li>
            <li>
          <li className="relative">
              <button
                className="hover:text-gray-300 flex items-center transition-colors focus:outline-none"
                onClick={() => handleDropdown("category")}
                type="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === "category"}
              >
              category
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown */}
              {openDropdown === "category" && (
                <ul
                  className="absolute left-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg z-20"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                 
                <li>
                   <Link to={'/post-doct_scholarship'} className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Postdoc Scholarship</Link> 
                </li>
                   <li>
                     <Link to="/phd-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>PhD Scholarship</Link>
                   </li>
                   <li>
                     <Link to="/master-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Master Scholarship</Link>
                   </li>
                    <li>
                       {/* <Link to="/bachelor-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Bachelor Scholarship</Link>    */}

                    </li>
                     <li>
                       <Link to="/undergraduate-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Undergraduate Scholarship</Link> 
                        
                     </li>
                      <li>
                         <Link to="/high-school-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>High School Scholarship</Link> 
                      </li>
                       <li>
                         
                       </li>
                </ul>
              )}
            </li>
            
            </li>
            {/* Scholarship Region Dropdown */}
            <li className="relative">
              <button
                className="hover:text-gray-300 flex items-center transition-colors focus:outline-none"
                onClick={() => handleDropdown("region")}
                type="button"
                aria-haspopup="true"
                aria-expanded={openDropdown === "region"}
              >
                Scholarship Region
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "region" && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <li>
                    <Link to="/asian_scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>asian scholarship </Link>
                  </li>
                  <li>
                    <Link to="/american-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>America Scholarship</Link>
                  </li>
                   <li>
                     <Link to={'/south-american-scholarship'} className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>South American Scholarship</Link>
                   </li>
                  <li>
                    <Link to="/european-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Europe Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/african-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Africa Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/australian-scholarship" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Australian Scholarship</Link>
                  </li>
                    <li>
                      <Link to='/middle_eastscholarship' className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setOpenDropdown(null)}>Middle East scholarhsip</Link>  
                    </li>
                </ul>
              )}
            </li>
            <li>
               <Link to="/internship"><span className="hover:text-gray-300 cursor-pointer transition-colors">Internship</span></Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-300 transition-colors">blogs</Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-2 space-y-1 font-medium bg-black rounded-b-lg pb-4 text-sm">
            <li>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <button
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800 focus:outline-none"
                onClick={() => handleDropdown("opportunity")}
                type="button"
              >
                Opportunity
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "opportunity" && (
                <ul className="pl-8">
                  <li>
                    <Link to="/fellowship" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>fellowship</Link>
                  </li>
                  <li>
                    <Link to="/about/team" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Team</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/famous-scholarship" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Famous Scholarship</Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Scholarship</Link>
            </li>
            <li>
              <button
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800 focus:outline-none"
                onClick={() => handleDropdown("region")}
                type="button"
              >
                Scholarship Region
                <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "region" && (
                <ul className="pl-8">
                  <li>
                    <Link to="/asia" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Asia</Link>
                  </li>
                  <li>
                    <Link to="/america" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>America Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/europe" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Europe Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/africa" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Africa Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/australian" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>Australian Scholarship</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span className="block px-4 py-2 hover:bg-gray-800 cursor-pointer">Internship</span>
            </li>
            <li>
              <Link to="/faq" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setMenuOpen(false)}>FAQ</Link>
            </li>
           
          </ul>
        )}
      </nav>
    </header>
 
 
    </>)
}
     
  
  </>
)

};
export default Navbar;