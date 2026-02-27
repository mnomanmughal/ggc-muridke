import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = ({ isUrdu }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Campus images for slider
  const slides = [
    {
      image: '/images/campus2.jpg',
      title: isUrdu ? 'خوش آمدید' : 'Welcome',
      subtitle: isUrdu ? 'گورنمنٹ گریجویٹ کالج مریدکے' : 'Government Graduate College Muridke',
    },
    {
      image: '/images/campus3.jpg',
      title: isUrdu ? 'جدید کیمپس' : 'Modern Campus',
      subtitle: isUrdu ? 'معیاری تعلیم کے لیے بہترین سہولیات' : 'World-Class Facilities for Quality Education',
    },
    {
      image: '/images/campus4.jpg',
      title: isUrdu ? 'خوبصورت ماحول' : 'Beautiful Environment',
      subtitle: isUrdu ? 'سر سبز اور پرسکون کیمپس' : 'Green and Peaceful Campus',
    },
    {
      image: '/images/campus5.jpg',
      title: isUrdu ? 'کھیلوں کی سہولیات' : 'Sports Facilities',
      subtitle: isUrdu ? 'جسمانی اور ذہنی نشوونما' : 'Physical and Mental Development',
    },
    {
      image: '/images/computer.jpg',
      title: isUrdu ? 'کھیلوں کی سہولیات' : 'Computer Lab',
      subtitle: isUrdu ? 'جسمانی اور ذہنی نشوونما' : 'Well Equiped Computer Lab',
    },
  ]

  const stats = [
    {
      icon: Users,
      value: '2000+',
      label: isUrdu ? 'طلباء' : 'Students',
      labelEn: 'Students'
    },
    {
      icon: GraduationCap,
      value: '30+',
      label: isUrdu ? 'اساتذہ' : 'Faculty Members',
      labelEn: 'Faculty'
    },
    {
      icon: Award,
      value: '15+',
      label: isUrdu ? 'سال کا تجربہ' : 'Years of Excellence',
      labelEn: 'Years'
    },
  ]

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sliding Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-pakistan-green/60 to-college-green-800/70"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white w-8'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                {isUrdu ? '🎓 اعلیٰ تعلیمی ادارہ' : '🎓 Premier Educational Institution'}
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-green-100 font-light leading-relaxed max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg text-green-200">
              {isUrdu
                ? 'علم، کردار اور قیادت کے ذریعے مستقبل کو روشن کرنا'
                : 'Illuminating futures through knowledge, character, and leadership since 2015'
              }
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center justify-center space-x-2 bg-white text-college-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>{isUrdu ? 'اب درخواست دیں' : 'Apply Now'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <span>{isUrdu ? 'مزید جانیں' : 'Learn More'}</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-green-300" />
                  <div className="font-display font-bold text-3xl">{stat.value}</div>
                  <div className="text-sm text-green-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo */}

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
