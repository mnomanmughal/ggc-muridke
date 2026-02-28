import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, Instagram } from 'lucide-react'

const Footer = ({ isUrdu }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: isUrdu ? 'ہوم' : 'Home' },
    { path: '/about', label: isUrdu ? 'ہمارے بارے میں' : 'About' },
    { path: '/admissions', label: isUrdu ? 'داخلے' : 'Admissions' },
    { path: '/faculty', label: isUrdu ? 'اساتذہ' : 'Faculty' },
  ]

  const departments = [
    { path: '/departments#science', label: isUrdu ? 'سائنس' : 'Science' },
    { path: '/departments#computer', label: isUrdu ? 'کمپیوٹر سائنس' : 'Computer Science' },
    { path: '/departments#commerce', label: isUrdu ? 'تجارت' : 'Commerce' },
    { path: '/departments#arts', label: isUrdu ? 'آرٹس' : 'Arts' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/18GRuokg3M/', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-br from-pakistan-green to-college-green-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-college-green-600 font-bold text-lg"></span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">
                  {isUrdu ? 'گورنمنٹ گریجویٹ کالج' : 'GovernmentGraduate College'}
                </h3>
                <p className="text-sm text-green-200">
                  {isUrdu ? 'مریدکے' : 'Muridke'}
                </p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              {isUrdu
                ? 'تعلیمی فضیلت کے لیے وقف، قوم کی روشن مستقبل کی تعمیر'
                : 'Dedicated to educational excellence, building a brighter future for the nation.'
              }
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 border-b-2 border-green-400 pb-2 inline-block">
              {isUrdu ? 'فوری لنکس' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 border-b-2 border-green-400 pb-2 inline-block">
              {isUrdu ? 'شعبہ جات' : 'Departments'}
            </h4>
            <ul className="space-y-2">
              {departments.map((dept, index) => (
                <li key={index}>
                  <Link
                    to={dept.path}
                    className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {dept.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 border-b-2 border-green-400 pb-2 inline-block">
              {isUrdu ? 'رابطہ کریں' : 'Contact Us'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-green-100 text-sm">
                  Main GT Road, Muridke,<br />
                  District Sheikhupura, Punjab
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300" />
                <a href="tel:+92495250123" className="text-green-100 hover:text-white transition-colors">
                  +92-495-250123
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300" />
                <a href="mailto:info@ggcmuridke.edu.pk" className="text-green-100 hover:text-white transition-colors">
                  info@ggcmuridke.edu.pk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm text-center md:text-left">
              © {currentYear} {isUrdu ? 'گورنمنٹ گریجویٹ کالج مریدکے' : 'Govt. Graduate College Muridke'}.
              {isUrdu ? ' تمام حقوق محفوظ ہیں۔' : ' All rights reserved.'}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/admissions" className="text-green-100 hover:text-white transition-colors">
                {isUrdu ? 'رازداری کی پالیسی' : 'Privacy Policy'}
              </Link>
              <Link to="/contact" className="text-green-100 hover:text-white transition-colors">
                {isUrdu ? 'شرائط و ضوابط' : 'Terms & Conditions'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
