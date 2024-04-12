// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments } from "@fortawesome/free-solid-svg-icons";
// import { Outlet, Link } from "react-router-dom";


// import "./SideNav.css";

// const SideNav = () => {
//   return (
//     <div className="app-side-nav ">
//       <nav className="side-nav-content">
//         <ul className="nav-list">
//           <button
//             className="btn btn-light dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <i class="fa-solid fa-home  px-2"></i>
//             ACFC Overview
//           </button>

//           <ul className="dropdown-menu dropdown-menu-dark">
//             <li>
//               <a href="/dashboard/project" className="dropdown-item">
//                 DL 2.0 Migration Project
//               </a>
//               <a href="/dashboard/onboardingAccess" className="dropdown-item">
//               Onboarding Access-Citrix 
//               </a>

//               <a href="/dashboard/hedis" className="dropdown-item">
//                 HEDIS
//               </a>

//               <a href="/dashboard/introduction" className="dropdown-item">
//                 Amerihealth Intro PPTX
//               </a>
//             </li>
//           </ul>

//           <br></br>
//           <br></br>
//           <br></br>

//           <button
//             className="btn btn-light dropdown-toggle"
//             data-bs-toggle="dropdown"
//           >
//             <i class="fa-solid fa-file-circle-plus px-2"></i>
//             Project And Track
//           </button>

//           <ul className="dropdown-menu dropdown-menu-dark">
//             <li>
//               <a href="/dashboard/edoprod" className="dropdown-item">
//                 EDO-Prod Support
//               </a>

//               <a href="/dashboard/edo_pod_engg" className="dropdown-item">
//                 EDO-POD Engg
//               </a>

//               <a href="/dashboard/digital" className="dropdown-item">
//                 Digital
//               </a>

//               <a href="/dashboard/teamRecordings" className="dropdown-item">
//               Team Recordings
//               </a>
//             </li>
//           </ul>

//           <br></br>
//           <br></br>
          

//           <li className="nav-list-item">
//             <i class="fa-solid fa-chair"></i>

//             <span>
//               <Link to="/dashboard/domain">Domain Foundation</Link>
//             </span>
//           </li>

//           <br></br>
//           <br></br>

//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>

//             <span>
//               <Link to="/dashboard/mandatoryTrain">Mandatory Trainings</Link>
//             </span>
//           </li>

//           <br></br>
//           <br></br>

//           <li className="nav-list-item">
//             <i class="fa-solid fa-train"></i>

//             <span>
//               <Link to="/dashboard/mavericksTrain">Mavericks Training</Link>
//             </span>
//           </li>

//           <br></br>
          

//           <li className="nav-list-item">
//             <i class="fa-solid fa-users"></i>

//             <span>
//               <Link to="/dashboard/onboarding">Onboarding</Link>
//             </span>
//           </li>

//           <br></br>
//           <br></br>

          

//           <br></br>
//           <br></br>
           
          
//         </ul>
//         <ul className="bottom-nav-list">
  
//   <li className="bottom-nav-list-item">
//     <a href="https://tensaigpt.hexaware.com/" target="_blank" rel="noopener noreferrer">
//       <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe" alt="Tensai GPT Icon" />
//       {/* for icon name  */}
//     </a>
//   </li>
// </ul>


//       </nav>

//       <Outlet />
//     </div>
//   );
// };

// export default SideNav;




import React from "react";
 
import { Outlet, Link } from "react-router-dom";
 
 
import "./SideNav.css";
 
const SideNav = () => {
  return (
    <div className="app-side-nav ">
      <nav className="side-nav-content">
        <ul className="nav-list">
          {/* <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i class="fa-solid fa-home  px-2"></i>
            ACFC Overview
          </button>
 
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a href="/dashboard/project" className="dropdown-item">
                DL 2.0 Migration Project
              </a>
              <a href="/dashboard/onboardingAccess" className="dropdown-item">
              Onboarding Access-Citrix
              </a>
 
              <a href="/dashboard/hedis" className="dropdown-item">
                HEDIS
              </a>
 
              <a href="/dashboard/introduction" className="dropdown-item">
                Amerihealth Intro PPTX
              </a>
            </li>
          </ul>
 
          <br></br>
          <br></br>
          <br></br> */}
 
          <li className="nav-list-item">
            <i class="fa-solid fa-home  "></i>
                                             {/* style={{ color: 'black' }} */}
 
            <span>
              <Link to="/dashboard/project">ACFC Overview</Link>
            </span>
          </li>
 
          <br></br>
          <br></br>
 
          <li className="nav-list-item">
            <i class="fa-solid fa-chair"></i>
 
            <span>
              <Link to="/dashboard/domainnew">Domain Foundation</Link>
            </span>
          </li>
 
          <br></br>
          <br></br>
 
          <li className="nav-list-item">
            <i class="fa-solid fa-file-circle-plus "></i>
 
            <span>
              <Link to="/dashboard/edoprod">Project And Track</Link>
            </span>
          </li>
 
          <br></br>
          <br></br>
 
          {/* <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i class="fa-solid fa-file-circle-plus px-2"></i>
            Project And Track
          </button>
 
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a href="/dashboard/edoprod" className="dropdown-item">
                EDO-Prod Support
              </a>
 
              <a href="/dashboard/edo_pod_engg" className="dropdown-item">
                EDO-POD Engg
              </a>
 
              <a href="/dashboard/digital" className="dropdown-item">
                Digital
              </a>
 
              <a href="/dashboard/milliman" className="dropdown-item">
                Milliman
              </a>
            </li>
          </ul>
 
          <br></br>
          <br></br> */}
 
         
<li className="nav-list-item">
            <i class="fa-solid fa-train"></i>
 
            <span>
              <Link to="/dashboard/mavericksTrain">Mavericks Training</Link>
            </span>
          </li>
 
          <br></br>
          <br></br>
 
         
 
          <li className="nav-list-item">
            <i class="fa-solid fa-train"></i>
 
            <span>
              <Link to="/dashboard/mandatoryTrain">Mandatory Trainings</Link>
            </span>
          </li>
 
          <br></br>
          <br></br>
          <li className="nav-list-item">
            <i class="fa-solid fa-train"></i>
 
            <span>
              <Link to="/dashboard/deep">Deep Dive Session</Link>
            </span>
          </li>
 
 
         
         
 
          {/* <li className="nav-list-item">
            <i class="fa-solid fa-users"></i>
 
            <span>
              <Link to="/dashboard/onboarding">Onboarding</Link>
            </span>
          </li>
 
          <br></br>
          <br></br> */}
 
         
 
          <br></br>
          <br></br>
 
         
        </ul>
        <ul className="bottom-nav-list">
 
  <li className="bottom-nav-list-item">
    <a href="https://tensaigpt.hexaware.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://github.com/Guruprasad-suvarna/Tensai/assets/83869639/6fb21de8-d7b1-4fa8-bee9-40a42072dcbe" alt="Tensai GPT Icon" />
      {/* for icon name  */}
    </a>
  </li>
</ul>
 
 
      </nav>
 
      <Outlet />
    </div>
  );
};
 
export default SideNav;