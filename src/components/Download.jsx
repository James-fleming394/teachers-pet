import React from "react";
import { saveAs } from "file-saver";
import DownloadIcon from '../assets/download.png';

const DownloadButton = () => {

    const downloadPDF = () => {
        
        const pdfCreate = new jsPDF();

        pdfCreate.text('This is a blank PDF example', 10, 10);

        pdfCreate.save('example.pdf');
    };

    return(
        <button onClick={downloadPDF}><img src={DownloadIcon} alt="download icon"></img>Download Resource</button>
    )
}

export default DownloadButton;