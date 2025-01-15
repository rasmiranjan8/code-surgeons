import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import StudentLoginForm from "./pages/StudentLoginForm";
import AlumniLoginForm from "./pages/AlumniLoginForm";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import AlumniDashboard from "./pages/AlumniDashboard";
import AlumniProfile from "./pages/AlumniProfile";
import MentorshipPage from "./pages/MentorshipPage";
import ExploreResource from "./pages/ExploreResource";
import AlumniDirectory from "./pages/AlumniDirectory";
import User from "./pages/User";
 
function App() {
  return (
    <div>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login Pages */}
        <Route path="/login/student" element={<StudentLoginForm />} />
        <Route path="/login/alumni" element={<AlumniLoginForm />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/alumni/dashboard" element={<AlumniDashboard />} />
        <Route path="/Alumni/profile" element={<AlumniProfile />} />
        <Route path="/alumni/mentorship" element={<MentorshipPage />} />
        <Route path="/resources" element={<ExploreResource />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/john-doe" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
