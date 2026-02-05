import React, { useRef } from "react";
import { FiDownload } from "react-icons/fi";

const PdfDownloaderCard = ({
 
  title = "Download Our Brochure",
  description = "PDF 2.0 MB",
  fileUrl = "/path-to-your-pdf-file.pdf",
  thumbnailUrl = "https://media.istockphoto.com/id/2181210178/photo/pdf-digital-file-format.jpg?s=2048x2048&w=is&k=20&c=NkitEr4b3rSKeTrFecOM93SluknefR1cX18vrlZfZUQ=",
}) => {

  const downloadRef = useRef(null);
  const handleDownloadClick = () => {
    if (downloadRef.current) {
      downloadRef.current.click(); // Programmatically trigger the download
    }
  };
  return (
    
    <div  onClick={handleDownloadClick}  className="flex items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      {/* Thumbnail */}
      <div className="w-[40px] h-[40px] overflow-hidden rounded-md flex-shrink-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png"
          alt={title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Download Button */}
      <a
        href={fileUrl}
        download
        ref={downloadRef}
        className="flex items-center justify-center w-10 h-10 text-blue-600 hover:text-blue-800 transition-colors"
        title="Download PDF"
        onClick={(e) => e.stopPropagation()}
      >
        <FiDownload className="w-5 h-5" />
      </a>
    </div>
  );
};

export default PdfDownloaderCard;
