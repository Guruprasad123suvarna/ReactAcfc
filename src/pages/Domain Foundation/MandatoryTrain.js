import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const MandatoryTrain = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    { name: 'Information security data privacy', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:w:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20Mandatory%20Trainings/InformationSecurity_Dataprivacy_Training.docx?d=w06af0e44cfc04bb7a999f3e86f57d800&csf=1&web=1&e=sUTBPY' },
  ];

  const handleFileDisplay = (path) => {
    window.location.href = path;
  };

  return (
    <div className="container1">

      {files.map((file, index) => (
        <button key={index} className="button1" onClick={() => handleFileDisplay(file.path)}>
          {file.name}
        </button>
      ))}
      {selectedFile && (
        <div className="file-container">
          {/* Display the selected file based on its type */}
          {/* {selectedFile.endsWith('.png') && <img className="file-display" src={selectedFile} alt="File" />} */}
          {selectedFile.endsWith('.pptx') && <iframe className="file-display" src={selectedFile} title="File" />}
        </div>
      )}

    </div>
  );
};



export default MandatoryTrain;


