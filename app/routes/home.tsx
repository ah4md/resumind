import React from "react";
import Navbar from "~/components/NavBar";
import { Link } from "react-router-dom";
export async function loader() {
  return null;
}

const Home = () => {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          <h2>Drop your resume for an ATS score and improvement tips</h2>
          <div className="mt-8">
            <Link to="/upload" className="primary-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
