import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Edoprod.css";

const Edoprod = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
  
    { name: 'Data and Analytics Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F1%20Data%20Analytics%20Introduction%2Emp4&referrer=SharePoint&referrerScenario=OpenFile' },
    { name: 'Fee Schedule Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F2%20Fee%20Schedule%20introduction%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview' },
    { name: 'Hedis Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F3%20HEDIS%20Introduction%2Emp4&referrer=SharePoint&referrerScenario=OpenFile' },
    { name: 'Milliman Introduction', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F03%20Projects%20and%20Tracks%20in%20ACFC%2F4%20Miliman%20Introduction%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview' },
    { name: 'AmeriHealth POD Engineering Kickoff', type: 'ppt', path: 'https://hexawareonline.sharepoint.com/:p:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/03%20Projects%20and%20Tracks%20in%20ACFC/AmeriHealth%20POD%20Engineering%20Kickoff.pptx?d=wc16e9329f6bc4141a95fce55629de2e5&csf=1&web=1&e=sy5y3Z' },
    
  ];

  const handleFileDisplay = (path) => {
    // window.open(path, '_blank');
    window.location.href = path;
  };

  return (
    <div className="container">
      <div className="buttons-container">
        {files.map((file, index) => (
          <button key={index} className="button" onClick={() => handleFileDisplay(file.path)}>
            {file.name}
          </button>
        ))}
      </div>
      {selectedFile && (
        <div className="file-container">
          {/* Display the selected file based on its type */}
          {selectedFile.endsWith('.png') && <img className="file-display" src={selectedFile} alt="File" />}
          {selectedFile.endsWith('.pptx') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.pdf') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.docx') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.xlsx') && <iframe className="file-display" src={selectedFile} title="File" />}
          {selectedFile.endsWith('.video') && (
            <video className="file-display" src={selectedFile} controls>
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default Edoprod;


