import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GalleryGrid = ({ images, isUrdu }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, currentIndex])

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover-lift"
            onClick={() => openModal(image, index)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Image */}
            <div className="aspect-w-16 aspect-h-12 bg-gray-200">
              {image.url ? (
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-college-green-200 to-college-green-400 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-50">
                    {image.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-display font-bold text-lg mb-1">
                {image.title}
              </h3>
              {image.description && (
                <p className="text-gray-200 text-sm">
                  {image.description}
                </p>
              )}
            </div>

            {/* Category Badge */}
            {image.category && (
              <div className="absolute top-3 right-3 bg-college-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {image.category}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-2"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Image Container */}
          <div className="max-w-6xl max-h-[90vh] flex flex-col">
            {selectedImage.url ? (
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-full h-[60vh] bg-gradient-to-br from-college-green-300 to-college-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-9xl font-bold opacity-50">
                  {selectedImage.title.charAt(0)}
                </span>
              </div>
            )}
            
            {/* Image Info */}
            <div className="text-center mt-4 space-y-2">
              <h3 className="text-white font-display font-bold text-2xl">
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="text-gray-300">
                  {selectedImage.description}
                </p>
              )}
              <p className="text-gray-400 text-sm">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-2"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default GalleryGrid
