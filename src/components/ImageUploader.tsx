import React, { useCallback } from 'react';
import { Upload, Image as ImageIcon, Loader } from 'lucide-react';

const sampleImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    title: 'Portrait'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    title: 'Product'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    title: 'E-commerce'
  }
];

export default function ImageUploader() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [processedImage, setProcessedImage] = React.useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSampleImage = (imageUrl: string) => {
    setPreview(imageUrl);
    setFile(null);
  };

  const processImage = async () => {
    if (!preview) return;
    
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessedImage(preview);
    setIsProcessing(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto" id="upload-section">
      {!preview ? (
        <>
          <div
            className={`border-2 border-dashed rounded-xl p-8 ${
              isDragging
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-700 hover:border-gray-600'
            } transition-colors`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <Upload className="w-12 h-12 text-gray-400" />
              <div className="text-center">
                <p className="text-lg text-gray-300">
                  Drag and drop your image here, or{' '}
                  <label className="text-blue-500 hover:text-blue-400 cursor-pointer">
                    browse
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Supports: JPG, PNG, WEBP • Max size: 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white text-lg mb-4">Or try with a sample image:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {sampleImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => handleSampleImage(image.url)}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">{image.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-lg" />
              <img
                src={preview}
                alt="Original"
                className="w-full h-64 object-contain rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-gray-900/80 px-3 py-1 rounded-full text-sm text-gray-300">
                Original
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-lg" />
              {processedImage ? (
                <>
                  <img
                    src={processedImage}
                    alt="Processed"
                    className="w-full h-64 object-contain rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-green-500/80 px-3 py-1 rounded-full text-sm text-white">
                    Processed
                  </div>
                </>
              ) : (
                <div className="w-full h-64 flex items-center justify-center rounded-lg">
                  <ImageIcon className="w-12 h-12 text-gray-600" />
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                setFile(null);
                setPreview(null);
                setProcessedImage(null);
              }}
              className="px-6 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Upload New Image
            </button>
            {!processedImage && (
              <button
                onClick={processImage}
                disabled={isProcessing}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <Loader className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Remove Background</span>
                )}
              </button>
            )}
            {processedImage && (
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = processedImage;
                  link.download = 'processed-image.png';
                  link.click();
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Download Result
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}