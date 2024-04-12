


// import React from "react";

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// import Header from "./components/Header/Header";
// import SideNav from "./components/SideNav/SideNav";
// import Project from "./pages/ACFCOVERVIEW/Project";
// import Hedis from "./pages/ACFCOVERVIEW/Hedis";
// import OnboardingAccesss from "./pages/ACFCOVERVIEW/OnboardingAccess";
// import Introduction from "./pages/ACFCOVERVIEW/Introduction";
// import Edoprod from "./pages/Project_TRack/Edoprod";
// import Edo_pod_engg from "./pages/Project_TRack/Edo_pod_engg";
// import Milliman from "./pages/Project_TRack/Milliman";
// import Domain from "./pages/Domain Foundation/Domain";
// import MandatoryTrain from "./pages/Domain Foundation/MandatoryTrain";
// import MavericksTrain from "./pages/Mavericks/MavericksTrain";
// import Onboarding from "./pages/Onboarding/Onboarding";
// import Digital from "./pages/Project_TRack/Digital";
// import Login from "./pages/Login";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         {/* <Route path="/login" element={<Login />} />   */}
//         <Route path="/" element={<SideNav />}> 
//           <Route path="/project" element={<Project />} />
//           <Route path="/onboardingAccess" element={<OnboardingAccesss />} />
//           <Route path="/introduction" element={<Introduction />} />
//           <Route path="domain" element={<Domain />} />
//           <Route path="mandatoryTrain" element={<MandatoryTrain />} />
//           <Route path="edo_pod_engg" element={<Edo_pod_engg />} />
//           <Route path="/milliman" element={<Milliman />} />
//           <Route path="edoprod" element={<Edoprod />} />
//           <Route path="/hedis" element={<Hedis />} />
//           <Route path="/digital" element={<Digital />} />
//           <Route path="mavericksTrain" element={<MavericksTrain />} />
//           <Route path="onboarding" element={<Onboarding />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
    
  
//   );
// }
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Project from "./pages/ACFCOVERVIEW/Project";

import OnboardingAccesss from "./pages/ACFCOVERVIEW/OnboardingAccess";

import Edoprod from "./pages/Project_TRack/Edoprod";


import MandatoryTrain from "./pages/Domain Foundation/MandatoryTrain";
import MavericksTrain from "./pages/Mavericks/MavericksTrain";


import Login from "./pages/Login";

import Navbar from "./components/Header/Header";
import Deep from "./pages/Deep Dive Session/Deep";
import Domainnew from "./pages/Domain Foundation/Domainnew";


export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SideNav />}> 
        <Route path="/dashboard/project" element={<Project />} />
          <Route path="/dashboard/onboardingAccess" element={<OnboardingAccesss />} />

          
          <Route path="/dashboard/domainnew" element={<Domainnew />} />
          <Route path="/dashboard/mandatoryTrain" element={<MandatoryTrain />} />
          
  
          <Route path="/dashboard/edoprod" element={<Edoprod />} />

         
          <Route path="/dashboard/mavericksTrain" element={<MavericksTrain />} />

          <Route path="/dashboard/deep" element={<Deep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

