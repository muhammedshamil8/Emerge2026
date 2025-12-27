import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <main className="flex-grow mx-auto w-full bg-[#F0F9FF] mt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
