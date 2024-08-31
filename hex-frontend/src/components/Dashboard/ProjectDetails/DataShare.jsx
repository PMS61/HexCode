import React, { useState, useEffect } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import { Download,Eye } from 'lucide-react'; // Import the Download icon

export default function DataShare() {
  const [files, setFiles] = useState([]);
  const [submittedFiles, setSubmittedFiles] = useState([]);
  const [error, setError] = useState(null);

  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleSubmit = () => {
    setSubmittedFiles([...submittedFiles, ...files]); // Add new files to the existing list
    setFiles([]);
  };

  const createObjectURL = (file) => {
    if (file && (file instanceof File || file instanceof Blob)) {
      try {
        return URL.createObjectURL(file);
      } catch (error) {
        console.error("Error creating object URL:", error);
        setError("Failed to create preview for file: " + file.name);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    return () => {
      submittedFiles.forEach((file) => {
        const url = createObjectURL(file);
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [submittedFiles]);

  return (
    <div className="flex flex-col items-center w-full p-5">
      <div className="flex justify-center w-full mb-5">
        <Dropzone
          onChange={updateFiles}
          value={files}
          className="w-full max-w-4xl"
        >
          {files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </Dropzone>
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Files
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {submittedFiles.length > 0 && (
        <div className="mt-8 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Shared Files</h2>
          <ul className="space-y-4">
            {submittedFiles.map((file) => {
              const objectURL = createObjectURL(file);
              return (
                <li key={file.id} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                  {file.type.startsWith('image/') && objectURL && (
                    <img
                      src={objectURL}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded-md"
                      onLoad={() => URL.revokeObjectURL(objectURL)}
                    />
                  )}
                  {file.type.startsWith('video/') && objectURL && (
                    <video
                      controls
                      className="w-16 h-16 object-cover rounded-md"
                    >
                      <source src={objectURL} type={file.type} />
                      Your browser does not support the video tag.
                    </video>
                  )}
<div className="flex-1 flex justify-between items-center overflow-hidden">
  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
  <div className="flex items-center space-x-4">
    <a
      href={objectURL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-800 flex items-center"
      onClick={() => URL.revokeObjectURL(objectURL)}
    >
      <Eye className="w-6 h-6" />
    </a>
    <a
      href={objectURL}
      download={file.name}
      className="text-gray-400 hover:text-gray-800 flex items-center"
      onClick={() => URL.revokeObjectURL(objectURL)}
    >
      <Download className="w-6 h-6" />
    </a>
  </div>
</div>

                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
