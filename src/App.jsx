import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Register, Committee, Login, Dashboard, Abstract, FeedbackForm,Speakers } from '@/pages';
import Layout from '@/layout';
import { useAuth } from "@/libs/useAuth";
import { AnimatePresence } from "framer-motion";
import { Speaker } from 'lucide-react';

// Function to remove the preloader
const removePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0'; 
    setTimeout(() => {
      preloader.remove(); 
    }, 1200); 
  }
};

export default function App() {
  const { user } = useAuth();

  // Remove preloader on mount
  useEffect(() => {
    removePreloader();
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/committee" element={<Committee />} />
            <Route path="/speakers" element={<Speakers />} />
            {/* <Route path='/register/abstract' element={<Abstract />} /> */}
            <Route path='/Feedback' element={<FeedbackForm />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={user ? <Dashboard /> : <Navigate to="/admin/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};
