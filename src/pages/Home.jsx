import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import NoticeBoard from '../components/NoticeBoard'
import { BookOpen, Users, Award, FileText, Calendar, Image, MessageSquare } from 'lucide-react'

const Home = ({ isUrdu }) => {
  // Latest Announcements Data
  const notices = [
    {
      title: isUrdu ? 'بی ایس پروگرام 2026 میں داخلے کھل گئے' : 'Importanat Note RegardingRevision Plan 2026',
      description: isUrdu 
        ? 'بی ایس پروگرامز میں داخلے کے لیے درخواستیں 28 فروری تک جمع کرائی جا سکتی ہیں۔'
        : ' All first year and second year students and their parents are informed that revision classes are being conducted in this college from 23rd February 2026 to 28th March 2026 after which the pre-board examination will be conducted. All students should ensure attendance in revision classes and pre-board. Students who are absent from classes and absent/failed in the examination will not be issued roll number slips for the board examinations.',
      date: 'Feb 15, 2026',
      category: 'Examination',
      isPinned: true,
     
    },
    {
      title: isUrdu ? 'اہم: سالانہ امتحانات کا شیڈول' : 'Revision Plan Schedule',
      description: isUrdu
        ? 'سالانہ امتحانات 1 مارچ سے شروع ہوں گے۔ تفصیلی ٹائم ٹیبل نوٹس بورڈ پر دیکھیں۔'
        : 'Revision Plan Schedule from 23 february 2026 to 28 march 2026 pre-board examination will commence from March 1, 2026. Detailed timetable available on notice board.',
      date: 'Feb 20, 2026',
      category: 'Eamination Schedule',
      isPinned: true,
      link: '/images/revision.pdf',
    },
    {
      title: isUrdu ? 'سائنس میلہ کا انعقاد' : 'Parent Teacher Meeting',
      description: isUrdu
        ? '20 مارچ کو سائنس میلہ کا انعقاد ہوگا۔ تمام طلبا شرکت کی دعوت ہیں۔'
        : 'Parent teacher meeting will be held on january 22 2026 at 10:00 AM in the college . All parents are requested to attend the meeting.',
      date: 'january 22, 2026',
      category: 'Event',
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

  // Highlights (e.g. college functions, events)
  const highlights = [
    {
      image: '/images/Highlits/kashmir.jpeg',
      title: isUrdu ? 'کالج تقریب' : 'Kashmir Solidarity Day',
      description: isUrdu
        ? 'سالانہ تقریب میں طلبا کی بہترین کارکردگی اور ثقافتی پروگرام۔'
        : 'Annual function showcasing student talent and cultural programs.',
    },
    {
      image: '/images/highlights/sports.jpg',
      title: isUrdu ? 'سالانہ کھیلوں کا دن' : 'Annual Sports Day',
      description: isUrdu
        ? 'کھیلوں کے میدان میں جوش و جذبہ اور صحت مند مقابلہ۔'
        : 'A day of sportsmanship, enthusiasm and healthy competition.',
    },
    {
      image: '/images/highlights/seminar.jpg',
      title: isUrdu ? 'سیمینار و ورکشاپ' : 'Seminars & Workshops',
      description: isUrdu
        ? 'ماہرین کے ساتھ تعلیمی سیمینار اور ہنر ورکشاپس۔'
        : 'Educational seminars and skill workshops with experts.',
    },
    {
      image: '/images/highlights/prize-distribution.jpg',
      title: isUrdu ? 'انعامات کی تقسیم' : 'Prize Distribution',
      description: isUrdu
        ? 'امتحانات اور تقریبات میں کامیاب طلبا کی حوصلہ افزائی۔'
        : 'Celebrating top performers in exams and co-curricular activities.',
    },
    {
      image: '/images/highlights/science-fair.jpg',
      title: isUrdu ? 'سائنس میلہ' : 'Science Fair',
      description: isUrdu
        ? 'طلبہ کے سائنسی منصوبے اور تجربات کا نمائش۔'
        : 'Student science projects and experiments on display.',
    },
    {
      image: '/images/highlights/literary-event.jpg',
      title: isUrdu ? 'ادبی تقریب' : 'Literary Event',
      description: isUrdu
        ? 'مشاعرہ، تقریر اور ادبی مقابلے۔'
        : 'Mushaira, debates and literary competitions.',
    },
    {
      image: '/images/highlights/independence-day.jpg',
      title: isUrdu ? 'یوم آزادی' : 'Independence Day',
      description: isUrdu
        ? 'قومی تقریب اور جشن آزادی۔'
        : 'National ceremony and Independence Day celebrations.',
    },
  ]

  // Principal's Message
  const principalMessage = {
    image: '/images/principal.png',
    name: isUrdu ? 'پروفیسر شفقت حبیب آغا' : 'Prof. Shafqat Habib Agha',
    designation: isUrdu ? 'پرنسپل' : 'Principal',
    message: isUrdu
      ? ' ہم اپنے طلبا کو اعلیٰ تعلیم فراہم کرنے اور انہیں کامیاب مستقبل کے لیے تیار کرنے کے لیے پرعزم ہیں۔'
      : 'We are committed to providing quality education and preparing our students for a successful future. Our dedicated faculty and modern facilities ensure an excellent learning environment.',
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
                    className="w-full h-[620px] md:h-[700px] object-cover object-top"
                  />
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
                    {isUrdu ? 'خوش آمدید' : 'Welcome to Govt. Graduate College Muridke'}
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

                <Link
                  to="/about"
                  className="inline-block btn-primary"
                >
                  {isUrdu ? 'مزید جانیں' : 'Learn More About Us'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section - Cards */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'جھلکیاں' : 'Highlights'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'کالج کی سرگرمیاں' : 'College Highlights'}
            </h2>
            <p className="section-subtitle mt-4">
              {isUrdu
                ? 'تقریبات، کھیل اور تعلیمی سرگرمیوں کی جھلک'
                : 'Glimpses of our events, sports and academic activities'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-college-green-200 hover:shadow-xl hover:shadow-college-green-500/10 hover:-translate-y-2 active:translate-y-0 transition-all duration-500 ease-out"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 transition-colors duration-300">
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-college-green-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white bg-college-green-600 hover:bg-college-green-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 ease-out"
            >
              <span>{isUrdu ? 'تمام جھلکیاں دیکھیں' : 'View All Highlights'}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
