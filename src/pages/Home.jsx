import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import NoticeBoard from '../components/NoticeBoard'
import { BookOpen, Users, Award, FileText, Calendar, Image, MessageSquare } from 'lucide-react'

const Home = ({ isUrdu }) => {
  // Latest Announcements Data
  const notices = [
    {
      title: isUrdu ? 'بی ایس پروگرام 2026 میں داخلے کھل گئے' : 'RevsionPlan 2026',
      description: isUrdu
        ? 'بی ایس پروگرامز میں داخلے کے لیے درخواستیں 28 فروری تک جمع کرائی جا سکتی ہیں۔'
        : 'Revision Plan 2026',
      date: 'Feb 15, 2026',
      category: 'Revision Plan',
      isPinned: true,
    },
    {
      title: isUrdu ? 'اہم: سالانہ امتحانات کا شیڈول' : 'Important: Annual Examination Pre-Board Schedule',
      description: isUrdu
        ? 'سالانہ امتحانات 1 مارچ سے شروع ہوں گے۔ تفصیلی ٹائم ٹیبل نوٹس بورڈ پر دیکھیں۔'
        : 'Annual examinations will commence from March 30, 2026. Detailed timetable available on notice board.',
      date: 'Feb 20, 2026',
      category: 'exam',
      isPinned: true,
    },
    {
      title: isUrdu ? 'نتائج کی تاریخ کا اعلان' : 'Result Announcement Date',
      description: isUrdu
        ? 'FA/FSc کے نتائج 15 اپریل کو اعلان کیے جائیں گے۔'
        : 'FA/FSc results will be announced on April 15, 2026.',
      date: 'Feb 22, 2026',
      category: 'exam',
    },
  ]

  // Principal's Message
  const principalMessage = {
    name: isUrdu ? 'پروفیسر شفقت حبیب آغا' : 'Prof. Shafqat Habib Agha',
    designation: isUrdu ? 'پرنسپل' : 'Principal',
    education: isUrdu ? 'ایم ایس سی' : 'M.Phil Pol Science',
    message: isUrdu
      ? 'گورنمنٹ گریجویٹ کالج مریدکے میں آپ کا خیر مقدم ہے۔ ہم اپنے طلبا کو اعلیٰ تعلیم فراہم کرنے اور انہیں کامیاب مستقبل کے لیے تیار کرنے کے لیے پرعزم ہیں۔'
      : 'Welcome to Government Graduate College Muridke. We are committed to providing quality education and preparing our students for a successful future. Our dedicated faculty and modern facilities ensure an excellent learning environment.',
    image: "/images/principalImg.jpeg",
  }

  // Quick Links Data
  const quickLinks = [
    {
      icon: BookOpen,
      title: isUrdu ? 'پروگرامز' : 'Programs',
      description: isUrdu ? 'ہمارے تعلیمی پروگرامز دیکھیں' : 'Explore our academic programs',
      link: '/admissions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: isUrdu ? 'اساتذہ' : 'Faculty',
      description: isUrdu ? 'ہماری تجربہ کار ٹیم سے ملیں' : 'Meet our experienced team',
      link: '/faculty',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Calendar,
      title: isUrdu ? 'خبریں و اعلانات' : 'News & Events',
      description: isUrdu ? 'تازہ ترین خبریں' : 'Latest updates',
      link: '/news',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FileText,
      title: isUrdu ? 'داخلہ فارم' : 'Admission Form',
      description: isUrdu ? 'آن لائن درخواست دیں' : 'Apply online',
      link: '/admissions',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Image,
      title: isUrdu ? 'گیلری' : 'Gallery',
      description: isUrdu ? 'کیمپس کی تصاویر' : 'Campus photos',
      link: '/gallery',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: MessageSquare,
      title: isUrdu ? 'رابطہ' : 'Contact Us',
      description: isUrdu ? 'ہم سے رابطہ کریں' : 'Get in touch',
      link: '/contact',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero isUrdu={isUrdu} />

      {/* Principal's Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Principal Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={principalMessage.image}
                    alt={principalMessage.name}
                    className="w-full h-[700px] object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback shown if image fails to load */}
                  <div
                    className="w-full h-[500px] bg-gradient-to-br from-college-green-200 to-college-green-400 items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-college-green-600 text-7xl font-bold">
                        {principalMessage.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-college-green-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              </div>

              {/* Message Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
                    {isUrdu ? 'پرنسپل کا پیغام' : "Principal's Message"}
                  </span>
                  <h2 className="section-title mt-2">
                    {isUrdu ? 'خوش آمدید' : 'Welcome to Government Graduate College Muridke'}
                  </h2>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {principalMessage.message}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="font-display font-bold text-xl text-gray-900">
                    {principalMessage.name}
                  </p>
                  <p className="text-college-green-600 font-semibold">
                    {principalMessage.designation}
                  </p>
                </div>
                <>
                  <Link
                    to="/about"
                    className="inline-block btn-primary"
                  >
                    {isUrdu ? 'مزید جانیں' : 'Learn More About Us'}
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'تازہ ترین' : 'Latest Updates'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'اعلانات و خبریں' : 'Announcements & News'}
            </h2>
            <p className="section-subtitle mt-4">
              {isUrdu
                ? 'کالج کی تازہ ترین خبروں اور اعلانات سے باخبر رہیں'
                : 'Stay updated with the latest news and announcements from the college'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <NoticeBoard notices={notices} isUrdu={isUrdu} />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'فوری رسائی' : 'Quick Access'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'اہم لنکس' : 'Explore Our Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-college-green-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {link.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 text-college-green-600 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                  <span>{isUrdu ? 'مزید دیکھیں' : 'Explore'}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-college-green-600 to-pakistan-green text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              {isUrdu ? 'اپنے مستقبل کا آغاز یہاں سے کریں' : 'Start Your Journey With Us'}
            </h2>
            <p className="text-xl text-green-100">
              {isUrdu
                ? 'آج ہی داخلہ لیں اور معیاری تعلیم حاصل کریں'
                : 'Join us today and take the first step towards a brighter future'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/admissions"
                className="bg-white text-college-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:scale-105"
              >
                {isUrdu ? 'اب درخواست دیں' : 'Apply for Admission'}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                {isUrdu ? 'رابطہ کریں' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home