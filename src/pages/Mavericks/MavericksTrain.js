import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


import "./MavericksTrain.css";
const MavericksTrain = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const files = [
    { name: 'Databricks Case Study', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:w:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/05%20Mavericks%20%20Training/Databricks%20Case%20Studies.docx?d=wf98ebb13123f406480a33a1b8c9bdb5d&csf=1&web=1&e=kt31F7' },
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




export default MavericksTrain;
