import React from "react";
import { Link } from "react-router-dom";
import ScoreCircle from "./ScoreCircle";

export const ResumeCard = ({ resume }: { resume: any }) => {
  const {
    id,
    companyName = "Unknown Company",
    jobTitle = "Unknown Role",
    feedback,
    imagePath = "/images/pdf.png", // fallback image
  } = resume;

  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000 p-4 border rounded-lg bg-white shadow-md"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-black font-bold text-xl break-words">
          {companyName}
        </h2>
        <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
      </div>
      <div className="flex-shrink-0">
        <ScoreCircle score={feedback?.overallScore ?? 0} />
      </div>
      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-full h-full">
          <img
            src={imagePath}
            alt="resume"
            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
};
