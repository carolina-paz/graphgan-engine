// src/components/ImageProcessor.js
import React, { useState } from 'react';
import { Image } from 'image-js';

const ImageProcessor = () => {
  const [processedImage, setProcessedImage] = useState(null);

  const processImage = async (inputImage) => {
    try {
      // Read the input image as a data URL
      const dataUrl = await readFileAsDataURL(inputImage);

      // Load the input image
      const img = await Image.load(dataUrl);

      // Resize the image to a lower resolution
      const resizedImage = img.resize({ width: 100, height: 100 });

      // Get pixel data
      const pixelData = resizedImage.getPixelsArray();

      // Log the pixel data to the console (for demonstration purposes)
      console.log(pixelData);

      // Set the processed image (for demonstration purposes)
      setProcessedImage(resizedImage.toDataURL('image/png'));
    } catch (error) {
      console.error('Error processing image:', error);
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
