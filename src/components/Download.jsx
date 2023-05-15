import React from "react";
import DownloadIcon from '../assets/download.png';
import jsPDF from "jspdf";
import './Download.css';

const DownloadButton = () => {

    const downloadPDF = () => {
        
        const pdfCreate = new jsPDF();

        pdfCreate.text('This is a blank PDF example', 10, 10);

        pdfCreate.save('example.pdf');
    };

    return(
        <div className="DownloadButton">
            <button className="DownloadText" onClick={downloadPDF}>
            <img className="DownloadIcon" src={DownloadIcon} alt="download icon"></img>
            Download Resource</button>
        </div>
    )
}

export default DownloadButton;