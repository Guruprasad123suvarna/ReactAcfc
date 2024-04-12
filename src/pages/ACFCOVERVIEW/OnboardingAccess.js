import React, { useState } from "react";


import "./OnboardingAccess.css";

const OnboardingAccesss = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    { name: 'Mobile_pass sample_Image', type: 'image', path: '' },
    { name: 'Amerihealth Meeting Recording', type: 'video', path: 'https://hexawareonline.sharepoint.com/teams/ACFCAmeriHealthInduction/_layouts/15/stream.aspx?id=%2Fteams%2FACFCAmeriHealthInduction%2FShared%20Documents%2FGeneral%2F01%20ACFC%20Overview%2FDL%202%2E0%20Migration%20Project%2FData%20and%20Analytics%20migration%20to%20Cloud%20w_Hexaware%20%28Discovery%20workshop%29-20220310_122107-Meeting%20Recording%2Emp4&referrer=SharePoint&referrerScenario=OpenFile' },
    { name: 'AMerihealth Login Instruction_word', type: 'word', path: 'https://hexawareonline.sharepoint.com/:w:/r/teams/ACFCAmeriHealthInduction/Shared%20Documents/General/01%20ACFC%20Overview/Onboarding_Access-Citrix/AmeriHealth%20Login%20Instructions.docx?d=wd323b4c4b13f470b9e741313fdae5fc2&csf=1&web=1&e=1n87mY' }
  ];

  const handleFileDisplay = (path) => {
    // window.open(path, '_blank');
    window.location.href = path;
  };
  

  return (
    <div className="container1">
      <div className="buttons-container">
      {files.map((file, index) => (
        // <button key={index} className="button" onClick={() => handleFileDisplay(file.path)}>
        //   {file.name}
        // </button>
        <button key={index} className="button2" onClick={() => handleFileDisplay(file.path)}>
  {file.name}
</button>
        

      ))}
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
    </div>
  );
};
export default OnboardingAccesss;


