import React, { useState } from "react";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <NavBar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (<>
          <h2>{statusText}
            <img src="/images/resume-scan.gif" className="w-full" alt="" /></h2></>):()}
        </div>
      </section>
    </main>
  );
};

export default upload;
