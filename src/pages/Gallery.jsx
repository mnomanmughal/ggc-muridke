import React, { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import { Image as ImageIcon } from 'lucide-react'

const Gallery = ({ isUrdu }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Real campus images from uploads
  const images = [
    {
      url: '/images/campus1.jpg',
      title: isUrdu ? 'کالج کی عمارت' : 'College Building',
      description: isUrdu ? 'ہماری خوبصورت کیمپس' : 'Our beautiful campus',
      category: isUrdu ? 'کیمپس' : 'Campus',
      categoryEn: 'Campus',
    },
    {
      url: '/images/campus2.jpg',
      title: isUrdu ? 'سر سبز میدان' : 'Green Grounds',
      description: isUrdu ? 'کھلی جگہیں اور سبزہ' : 'Open spaces and greenery',
      category: isUrdu ? 'کیمپس' : 'Campus',
      categoryEn: 'Campus',
    },
    {
      url: '/images/campus3.jpg',
      title: isUrdu ? 'کیمپس کا منظر' : 'Campus View',
      description: isUrdu ? 'خوبصورت ماحول' : 'Beautiful environment',
      category: isUrdu ? 'کیمپس' : 'Campus',
      categoryEn: 'Campus',
    },
    {
      url: '/images/campus4.jpg',
      title: isUrdu ? 'احاطہ' : 'Campus Grounds',
      description: isUrdu ? 'طلباء کی سرگرمیوں کے لیے' : 'For student activities',
      category: isUrdu ? 'کیمپس' : 'Campus',
      categoryEn: 'Campus',
    },
    {
      url: '/images/campus5.jpg',
      title: isUrdu ? 'کالج کا مرکزی حصہ' : 'Main Campus Area',
      description: isUrdu ? 'مرکزی عمارت' : 'Main building area',
      category: isUrdu ? 'کیمپس' : 'Campus',
      categoryEn: 'Campus',
    },
    {
      url: '/images/gallery/physics.jpg',
      title: isUrdu ? 'سائنس لیب' : 'Physics Laboratory',
      description: isUrdu ? 'جدید لیبارٹری کی سہولیات' : 'Modern lab facilities',
      category: isUrdu ? 'سہولیات' : 'Facilities',
      categoryEn: 'Facilities',
    },
     {
      url: '/images/campus6.jpg',
      title: isUrdu ? 'سائنس لیب' : 'Biology Laboratory',
      description: isUrdu ? 'جدید لیبارٹری کی سہولیات' : 'Modern lab facilities',
      category: isUrdu ? 'سہولیات' : 'Facilities',
      categoryEn: 'Facilities',
    },
     {
      url: '/images/campus6.jpg',
      title: isUrdu ? 'سائنس لیب' : 'Chemistry Laboratory',
      description: isUrdu ? 'جدید لیبارٹری کی سہولیات' : 'Modern lab facilities',
      category: isUrdu ? 'سہولیات' : 'Facilities',
      categoryEn: 'Facilities',
    },
    {
      url: '/images/gallery/computer.jpg',
      title: isUrdu ? 'کمپیوٹر لیب' : 'computer Lab',
      description: isUrdu ? 'تازہ ترین ٹیکنالوجی' : 'Latest technology',
      category: isUrdu ? 'سہولیات' : 'Facilities',
      categoryEn: 'Facilities',
    },
    {
      title: isUrdu ? 'لائبریری' : 'Library',
      description: isUrdu ? 'وسیع کتابوں کا ذخیرہ' : 'Extensive book collection',
      category: isUrdu ? 'سہولیات' : 'Facilities',
      categoryEn: 'Facilities',
    },
    {
      title: isUrdu ? 'سالانہ تقریب' : 'Annual Function',
      description: isUrdu ? '2025 کی سالانہ تقریب' : 'Annual function 2025',
      category: isUrdu ? 'تقریبات' : 'Events',
      categoryEn: 'Events',
    },
    { url: '/images/gallery/MEETA.jpeg',
      title: isUrdu ? 'سائنس میلہ' : 'MEETA',
      description: isUrdu ? 'طلباء کی سائنسی نمائش' : 'Medical Engineering Entry Test Awereness',
      category: isUrdu ? 'تقریبات' : 'Events',
      categoryEn: 'Events',
    },
    {
      title: isUrdu ? 'کھیلوں کا دن' : 'Sports Day',
      description: isUrdu ? 'سالانہ کھیلوں کا دن' : 'Annual sports day',
      category: isUrdu ? 'کھیل' : 'Sports',
      categoryEn: 'Sports',
    },
    {
      title: isUrdu ? 'کرکٹ میچ' : 'Cricket Match',
      description: isUrdu ? 'انٹر کالج میچ' : 'Inter-college match',
      category: isUrdu ? 'کھیل' : 'Sports',
      categoryEn: 'Sports',
    },
    { 
      title: isUrdu ? 'کرکٹ میچ' : 'Caltur Day',
      description: isUrdu ? 'انٹر کالج میچ' : 'Inter-college match',
      category: isUrdu ? 'کھیل' : 'Sports',
      categoryEn: 'Sports',
    },
  ]

  const categories = [
    { value: 'all', label: isUrdu ? 'تمام' : 'All' },
    { value: 'Campus', label: isUrdu ? 'کیمپس' : 'Campus' },
    { value: 'Facilities', label: isUrdu ? 'سہولیات' : 'Facilities' },
    { value: 'Events', label: isUrdu ? 'تقریبات' : 'Events' },
    { value: 'Sports', label: isUrdu ? 'کھیل' : 'Sports' },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.categoryEn === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-college-green-900 to-pakistan-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ImageIcon className="w-20 h-20 mx-auto mb-4 animate-float" />
            <h1 className="font-display font-bold text-5xl md:text-6xl animate-slide-up">
              {isUrdu ? 'گیلری' : 'Gallery'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{animationDelay: '100ms'}}>
              {isUrdu
                ? 'کالج کی زندگی کی جھلکیاں'
                : 'Glimpses of College Life'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-college-green-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="mt-6 text-center text-gray-600">
              {isUrdu ? 'دکھایا جا رہا ہے: ' : 'Showing '} 
              <span className="font-bold text-college-green-600">{filteredImages.length}</span>
              {isUrdu ? ' تصاویر' : ' images'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredImages.length > 0 ? (
              <GalleryGrid images={filteredImages} isUrdu={isUrdu} />
            ) : (
              <div className="text-center py-20">
                <ImageIcon className="w-24 h-24 mx-auto mb-4 text-gray-400" />
                <h3 className="font-display font-bold text-2xl text-gray-600 mb-2">
                  {isUrdu ? 'کوئی تصویر نہیں ملی' : 'No Images Found'}
                </h3>
                <p className="text-gray-500">
                  {isUrdu 
                    ? 'براہ کرم دوسری کیٹیگری منتخب کریں'
                    : 'Please try selecting a different category'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              {isUrdu ? 'مزید تصاویر دیکھیں' : 'View More Photos'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isUrdu
                ? 'مزید تصاویر اور ویڈیوز کے لیے ہمارے سوشل میڈیا پیجز فالو کریں'
                : 'Follow our social media pages for more photos and videos'
              }
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.facebook.com/share/18GRuokg3M/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default Gallery