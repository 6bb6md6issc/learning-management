import { div } from "framer-motion/client";
import Image from "next/image";
import NonDashboardNavbar from "@/components/NonDashboardNavBar"
import Landing from "@/app/(nondashboard)/landing/page"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="nondashboard-layout"> 
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
