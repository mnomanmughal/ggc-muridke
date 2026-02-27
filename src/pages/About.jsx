import React from 'react'
import { Eye, Target, Building, BookOpen, Microscope, Computer, Users, Trophy } from 'lucide-react'

const About = ({ isUrdu }) => {
  const facilities = [
    {
      icon: Building,
      title: isUrdu ? 'جدید عمارت' : 'Modern Infrastructure',
      description: isUrdu
        ? 'وسیع اور ہوادار کلاس رومز جدید سہولیات کے ساتھ'
        : 'Spacious and well-ventilated classrooms with modern amenities',
    },
    {
      icon: BookOpen,
      title: isUrdu ? 'وسیع لائبریری' : 'Comprehensive Library',
      description: isUrdu
        ? '10,000+ کتابوں کا ذخیرہ اور ڈیجیٹل وسائل'
        : 'Over 10,000 books and digital resources for students',
    },
    {
      icon: Microscope,
      title: isUrdu ? 'سائنس لیبز' : 'Science Laboratories',
      description: isUrdu
        ? 'جدید آلات سے لیس فزکس، کیمسٹری اور بائیولوجی لیبز'
        : 'Well-equipped Physics, Chemistry, and Biology labs',
    },
    {
      icon: Computer,
      title: isUrdu ? 'کمپیوٹر لیب' : 'Computer Labs',
      description: isUrdu
        ? 'تازہ ترین سافٹ ویئر اور ہائی اسپیڈ انٹرنیٹ'
        : 'Latest software and high-speed internet connectivity',
    },
    {
      icon: Users,
      title: isUrdu ? 'کھیلوں کی سہولیات' : 'Sports Facilities',
      description: isUrdu
        ? 'کرکٹ، فٹبال، اور اندرونی کھیلوں کے میدان'
        : 'Cricket ground, football field, and indoor sports facilities',
    },
    {
      icon: Trophy,
      title: isUrdu ? 'اضافی نصابی سرگرمیاں' : 'Co-curricular Activities',
      description: isUrdu
        ? 'ڈیبیٹ، ڈرامہ، سنگیت اور دیگر سرگرمیاں'
        : 'Debate, drama, music, and other cultural activities',
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
            <h1 className="font-display font-bold text-5xl md:text-6xl animate-slide-up">
              {isUrdu ? 'ہمارے بارے میں' : 'About Our College'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {isUrdu
                ? 'چار دہائیوں سے معیاری تعلیم کی فراہمی'
                : 'Four Decades of Educational Excellence'
              }
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
                    {isUrdu ? 'ہماری تاریخ' : 'Our History'}
                  </span>
                  <h2 className="section-title mt-2">
                    {isUrdu ? 'ایک شاندار سفر' : 'A Legacy of Excellence'}
                  </h2>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {isUrdu ? (
                      <>
                        گورنمنٹ گریجویٹ کالج مریدکے کی بنیاد 1982 میں رکھی گئی۔ اس وقت سے لے کر آج تک، یہ ادارہ علاقے کی تعلیمی ضروریات کو پورا کرنے میں اہم کردار ادا کر رہا ہے۔
                      </>
                    ) : (
                      <>
                        Government Graduate College Muridke was established in 2015 with the vision of providing quality higher education to the youth of Muridke and surrounding areas. Over the past four decades, the college has grown exponentially and has become one of the premier institutions in the region.
                      </>
                    )}
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    {isUrdu ? (
                      <>
                        آج، ہمارے پاس 2000 سے زائد طلباء اور 50 سے زیادہ تجربہ کار اساتذہ ہیں۔ ہم نے ہزاروں کامیاب گریجویٹس تیار کیے ہیں جو ملک و بیرون ملک مختلف شعبوں میں خدمات انجام دے رہے ہیں۔
                      </>
                    ) : (
                      <>
                        Today, we proudly serve over 2,000 students with a faculty of 50+ dedicated professionals. Our alumni have made significant contributions in various fields, both nationally and internationally, making us proud of our legacy.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-[400px] bg-gradient-to-br from-college-green-300 to-college-green-600 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl font-bold mb-4">2015</div>
                      <div className="text-2xl font-display">
                        {isUrdu ? 'قیام کا سال' : 'Established'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-college-green-500 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  {isUrdu ? 'ہماری نظر' : 'Our Vision'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {isUrdu ? (
                    <>
                      ایک ایسے تعلیمی ادارے کے طور پر ابھرنا جو اعلیٰ معیار کی تعلیم، کردار سازی، اور قومی ترقی میں اہم کردار ادا کرے۔ ہم چاہتے ہیں کہ ہمارے طلباء نہ صرف تعلیمی لحاظ سے بہترین ہوں بلکہ اچھے شہری بھی بنیں۔
                    </>
                  ) : (
                    <>
                      To emerge as a leading educational institution that provides high-quality education, character building, and contributes significantly to national development. We aim to produce graduates who are not only academically excellent but also responsible citizens.
                    </>
                  )}
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-college-green-500 to-college-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  {isUrdu ? 'ہمارا مشن' : 'Our Mission'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {isUrdu ? (
                    <>
                      طلباء کو جدید تعلیم اور مہارتوں سے آراستہ کرنا، تاکہ وہ عالمی سطح پر مقابلہ کر سکیں۔ اخلاقی اقدار کو فروغ دینا اور سماجی ذمہ داریوں کا احساس پیدا کرنا۔ تحقیق اور جدت کی حوصلہ افزائی کرنا۔
                    </>
                  ) : (
                    <>
                      To equip students with modern education and skills to compete globally. To promote ethical values and social responsibility. To encourage research and innovation. To provide an inclusive learning environment that nurtures talent and fosters holistic development.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'ہماری سہولیات' : 'Our Facilities'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'جدید سہولیات' : 'World-Class Facilities'}
            </h2>
            <p className="section-subtitle mt-4">
              {isUrdu
                ? 'طلباء کی بہترین تعلیمی کارکردگی کے لیے جدید سہولیات'
                : 'State-of-the-art facilities for optimal learning experience'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-college-green-500 to-college-green-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <facility.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-college-green-600 to-pakistan-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: '2000+', label: isUrdu ? 'طلباء' : 'Students' },
              { value: '30+', label: isUrdu ? 'اساتذہ' : 'Faculty Members' },
              { value: '15+', label: isUrdu ? 'سال' : 'Years of Service' },
              { value: '95%', label: isUrdu ? 'کامیابی کی شرح' : 'Success Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-display font-bold text-4xl md:text-5xl mb-2">
                  {stat.value}
                </div>
                <div className="text-green-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
