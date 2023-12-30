// src/components/ImageProcessor.js
import React, { useState } from "react";
import { Image } from "image-js";

const ImageProcessor = () => {
  const [processedImage, setProcessedImage] = useState(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const processImage = async (inputImage) => {
    try {
      // Read the input image as a data URL
      const dataUrl = await readFileAsDataURL(inputImage);

      // Load the input image
      const img = await Image.load(dataUrl);

      // Resize the image to a lower resolution
      const resizedImage = img.resize({ width, height });

      const pixelData = resizedImage.getPixelsArray();
      let colors = [];

      for (let pixel of pixelData) {
        const pixelString = JSON.stringify(pixel);

        if (!colors.includes(pixelString)) {
          colors.push(pixelString);
        } else {
          console.log("already in");
        }
      }

      console.log("all pixels:", pixelData.length);
      console.log("all colors:", colors.length);

      // Log the pixel data to the console (for demonstration purposes)

      // Set the processed image (for demonstration purposes)
      setProcessedImage(resizedImage.toDataURL("image/png"));
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      processImage(file);
    }
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <div>
        <label>
          Width:
          <input
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="text-[#000000] ml-5"
          />
        </label>
      </div>
      <div className="my-6">
        <label>
          Height:
          <input
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="text-[#000000] ml-5"
          />
        </label>
      </div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {processedImage && (
        <div>
          <h2>Processed Image</h2>
          <img src={processedImage} alt="Processed" />
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;
