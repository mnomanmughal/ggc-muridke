import React from 'react'
import NoticeBoard from '../components/NoticeBoard'
import { Bell } from 'lucide-react'

const News = ({ isUrdu }) => {
  const allNotices = [
    {
      title: isUrdu ? 'بی ایس پروگرام 2026 میں داخلے کھل گئے' : 'ADP Program 2026 Admissions Open',
      description: isUrdu 
        ? 'بی ایس پروگرامز میں داخلے کے لیے درخواستیں 28 فروری تک جمع کرائی جا سکتی ہیں۔ مزید معلومات کے لیے داخلہ آفس سے رابطہ کریں۔'
        : 'Applications for ADP programs are now being accepted. Last date to apply is February 28, 2026. Contact admission office for details.',
      date: 'Feb 15, 2026',
      category: 'admission',
      isPinned: true,
    },
    {
      title: isUrdu ? 'اہم: سالانہ امتحانات کا شیڈول' : 'Important: Annual Examination Schedule',
      description: isUrdu
        ? 'سالانہ امتحانات 1 مارچ سے شروع ہوں گے۔ تفصیلی ٹائم ٹیبل نوٹس بورڈ پر دیکھیں۔ رول نمبر سلپس 25 فروری سے جاری کی جائیں گی۔'
        : 'Annual examinations will commence from March 1, 2026. Detailed timetable available on notice board. Roll number slips will be issued from February 25.',
      date: 'Feb 20, 2026',
      category: 'exam',
      isPinned: true,
    },
    {
      title: isUrdu ? 'سائنس میلہ کا انعقاد' : 'Annual Science Fair 2026',
      description: isUrdu
        ? '20 مارچ کو سائنس میلہ کا انعقاد ہوگا۔ تمام طلبا اپنے پروجیکٹس 15 مارچ تک جمع کروائیں۔'
        : 'Annual Science Fair will be held on March 20, 2026. All students are invited to participate. Submit your projects by March 15.',
      date: 'Feb 18, 2026',
      category: 'event',
    },
    {
      title: isUrdu ? 'نتائج کی تاریخ کا اعلان' : 'Result Announcement Date',
      description: isUrdu
        ? 'FA/FSc کے نتائج 15 اپریل کو اعلان کیے جائیں گے۔ تمام طلبا کالج ویب سائٹ چیک کرتے رہیں۔'
        : 'FA/FSc results will be announced on April 15, 2026. All students are advised to check the college website regularly.',
      date: 'Feb 22, 2026',
      category: 'exam',
    },
    {
      title: isUrdu ? 'کھیلوں کا دن - 5 مارچ' : 'Sports Day - March 5',
      description: isUrdu
        ? 'سالانہ کھیلوں کا دن 5 مارچ کو منایا جائے گا۔ تمام طلبا شرکت کی دعوت ہیں۔'
        : 'Annual Sports Day will be celebrated on March 5, 2026. All students are encouraged to participate in various sporting events.',
      date: 'Feb 12, 2026',
      category: 'event',
    },
    {
      title: isUrdu ? 'لائبریری میں نئی کتابیں' : 'New Books in Library',
      description: isUrdu
        ? 'لائبریری میں 500 نئی کتابیں شامل کی گئی ہیں۔ طلبا لائبریری کارڈ کے ساتھ کتابیں لے سکتے ہیں۔'
        : 'Over 500 new books have been added to the library collection. Students can borrow books with their library cards.',
      date: 'Feb 10, 2026',
      category: 'event',
    },
    {
      title: isUrdu ? 'فیس جمع کرانے کی آخری تاریخ' : 'Fee Submission Deadline',
      description: isUrdu
        ? 'موسم بہار کی فیس 28 فروری تک جمع کروائیں۔ تاخیر پر جرمانہ لاگو ہوگا۔'
        : 'Spring semester fee must be submitted by February 28, 2026. Late fee will be applicable after the deadline.',
      date: 'Feb 8, 2026',
      category: 'urgent',
    },
    {
      title: isUrdu ? 'کیریئر کاؤنسلنگ سیشن' : 'Career Counseling Session',
      description: isUrdu
        ? '12 مارچ کو کیریئر کاؤنسلنگ سیشن کا انعقاد۔ تمام فائنل ایئر کے طلبا لازمی شرکت کریں۔'
        : 'Career Counseling Session on March 12, 2026. All final year students must attend. Expert counselors will guide about career opportunities.',
      date: 'Feb 5, 2026',
      category: 'event',
    },
    {
      title: isUrdu ? 'کمپیوٹر لیب اپ گریڈ' : 'Computer Lab Upgrade',
      description: isUrdu
        ? 'کمپیوٹر لیب میں 50 نئے کمپیوٹرز نصب کیے گئے ہیں۔ تازہ ترین سافٹ ویئر دستیاب ہے۔'
        : 'Computer lab has been upgraded with 50 new computers and latest software. Lab timings: 8 AM to 5 PM.',
      date: 'Feb 3, 2026',
      category: 'event',
    },
  ]

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
            <Bell className="w-20 h-20 mx-auto mb-4 animate-float" />
            <h1 className="font-display font-bold text-5xl md:text-6xl animate-slide-up">
              {isUrdu ? 'خبریں و اعلانات' : 'News & Announcements'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{animationDelay: '100ms'}}>
              {isUrdu
                ? 'تازہ ترین خبروں سے باخبر رہیں'
                : 'Stay Updated with Latest News'
              }
            </p>
          </div>
        </div>
      </section>

      {/* All Notices Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <NoticeBoard notices={allNotices} isUrdu={isUrdu} showAll={true} />
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Bell className="w-16 h-16 mx-auto mb-6 text-college-green-600" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              {isUrdu ? 'اپ ڈیٹس حاصل کریں' : 'Get Updates'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isUrdu
                ? 'تازہ ترین اعلانات اور خبروں کے لیے ہمارے سوشل میڈیا پیجز فالو کریں'
                : 'Follow our social media pages for latest announcements and news'
              }
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-lg"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
