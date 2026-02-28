import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const Navbar = ({ isUrdu, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setIsDepartmentsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: isUrdu ? 'ہوم' : 'Home' },
    { path: '/about', label: isUrdu ? 'ہمارے بارے میں' : 'About' },
    { path: '/admissions', label: isUrdu ? 'داخلے' : 'Admissions' },
    { 
      label: isUrdu ? 'شعبہ جات' : 'Departments', 
      dropdown: true,
      items: [
        { path: '/departments#science', label: isUrdu ? 'سائنس' : 'Science' },
        { path: '/departments#computer', label: isUrdu ? 'کمپیوٹر سائنس' : 'Computer Science' },
        { path: '/departments#commerce', label: isUrdu ? 'تجارت' : 'Commerce' },
        { path: '/departments#arts', label: isUrdu ? 'آرٹس' : 'Arts' },
      ]
    },
    { path: '/faculty', label: isUrdu ? 'اساتذہ' : 'Faculty' },
    { path: '/gallery', label: isUrdu ? 'گیلری' : 'Gallery' },
    { path: '/news', label: isUrdu ? 'خبریں' : 'News' },
    { path: '/contact', label: isUrdu ? 'رابطہ' : 'Contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group min-w-0">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border-2 border-college-green-600">
              <img 
                src="/images/logo.jpeg" 
                alt="GGC Muridke Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h1 className="font-display font-bold text-xs sm:text-sm md:text-xl text-gray-900 leading-tight whitespace-normal break-words max-w-[150px] sm:max-w-[220px] md:max-w-none">
                <span className="md:hidden">
                  {isUrdu ? 'گورنمنٹ گریجویٹ کالج مریدکے' : 'Government Graduate College Muridke'}
                </span>
                <span className="hidden md:inline">
                  {isUrdu ? 'گورنمنٹ گریجویٹ کالج' : 'Government Graduate College'}
                </span>
              </h1>
              <p className="hidden md:block text-sm text-college-green-600 font-semibold">
                {isUrdu ? 'مریدکے' : 'Muridke | Sheikhupura'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.dropdown ? (
                <div 
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsDepartmentsOpen(true)}
                  onMouseLeave={() => setIsDepartmentsOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-college-green-600 font-medium transition-colors py-2">
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 ${
                    isDepartmentsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {link.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-college-green-50 hover:text-college-green-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === link.path
                      ? 'text-college-green-600'
                      : 'text-gray-700 hover:text-college-green-600'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-college-green-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              )
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-college-green-50 text-college-green-700 rounded-lg hover:bg-college-green-100 transition-colors"
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{isUrdu ? 'EN' : 'اردو'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 bg-college-green-50 text-college-green-700 rounded-lg"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-college-green-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 mobile-menu">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                link.dropdown ? (
                  <div key={index}>
                    <button
                      onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-college-green-50 hover:text-college-green-600 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDepartmentsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDepartmentsOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block px-4 py-2 text-gray-600 hover:text-college-green-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-college-green-50 text-college-green-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
