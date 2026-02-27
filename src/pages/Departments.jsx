import React from 'react'
import { Microscope, Cpu, TrendingUp, BookOpen, Users, Award } from 'lucide-react'

const Departments = ({ isUrdu }) => {
  const departments = [
    {
      id: 'science',
      icon: Microscope,
      name: isUrdu ? 'سائنس' : 'Science',
      color: 'from-blue-500 to-blue-600',
      description: isUrdu
        ? 'فزکس، کیمسٹری اور بائیولوجی میں جامع تعلیم'
        : 'Comprehensive education in Physics, Chemistry, and Biology',
      programs: ['FSc Pre-Medical', 'FSc Pre-Engineering'],
      facilities: [
        isUrdu ? 'جدید لیبارٹریز' : 'Modern Laboratories',
        isUrdu ? 'تجربہ کار اساتذہ' : 'Experienced Faculty',
        isUrdu ? 'سائنسی آلات' : 'Scientific Equipment',
      ],
      faculty: '10',
      students: '300+',
    },
    {
      id: 'computer',
      icon: Cpu,
      name: isUrdu ? 'کمپیوٹر سائنس' : 'Computer Science',
      color: 'from-purple-500 to-purple-600',
      description: isUrdu
        ? 'جدید ٹیکنالوجی اور پروگرامنگ کی تعلیم'
        : 'Modern technology and programming education',
      programs: ['ICS', ''],
      facilities: [
        isUrdu ? 'کمپیوٹر لیبز' : 'Computer Labs',
        isUrdu ? 'تیز انٹرنیٹ' : 'High-Speed Internet',
        isUrdu ? 'جدید سافٹ ویئر' : 'Latest Software',
      ],
      faculty: '10',
      students: '400+',
    },
    {
      id: 'commerce',
      icon: TrendingUp,
      name: isUrdu ? 'تجارت' : 'Commerce',
      color: 'from-green-500 to-green-600',
      description: isUrdu
        ? 'اکاؤنٹنگ، بزنس اور اقتصادیات کی تعلیم'
        : 'Education in Accounting, Business, and Economics',
      programs: ['ICom', ''],
      facilities: [
        isUrdu ? 'بزنس لیب' : 'Business Lab',
        isUrdu ? 'اکاؤنٹنگ سافٹ ویئر' : 'Accounting Software',
        isUrdu ? 'انٹرنشپ' : 'Internships',
      ],
      faculty: '10',
      students: '300+',
    },
    {
      id: 'arts',
      icon: BookOpen,
      name: isUrdu ? 'آرٹس' : 'Arts',
      color: 'from-red-500 to-red-600',
      description: isUrdu
        ? 'ادب، تاریخ اور سماجی علوم کی تعلیم'
        : 'Education in Literature, History, and Social Sciences',
      programs: ['FA', 'ADP'],
      facilities: [
        isUrdu ? 'وسیع لائبریری' : 'Extensive Library',
        isUrdu ? 'تحقیقی مواد' : 'Research Materials',
        isUrdu ? 'سیمینار' : 'Seminars',
      ],
      faculty: '13',
      students: '400+',
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
              {isUrdu ? 'ہمارے شعبہ جات' : 'Our Departments'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {isUrdu
                ? 'مختلف شعبوں میں معیاری تعلیم'
                : 'Excellence Across Multiple Disciplines'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <div
                key={dept.id}
                id={dept.id}
                className={`scroll-mt-24 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Department Card */}
                  <div className="relative">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover-lift">
                      {/* Header */}
                      <div className={`bg-gradient-to-br ${dept.color} p-8 text-white`}>
                        <dept.icon className="w-16 h-16 mb-4" />
                        <h2 className="font-display font-bold text-3xl mb-2">
                          {dept.name}
                        </h2>
                        <p className="text-white/90 text-lg">
                          {dept.description}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="p-8 space-y-6">
                        {/* Programs */}
                        <div>
                          <h3 className="font-display font-bold text-xl text-gray-900 mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-college-green-600" />
                            {isUrdu ? 'پروگرامز' : 'Programs Offered'}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {dept.programs.map((program, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-college-green-50 text-college-green-700 rounded-lg font-semibold text-sm"
                              >
                                {program}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Facilities */}
                        <div>
                          <h3 className="font-display font-bold text-xl text-gray-900 mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-college-green-600" />
                            {isUrdu ? 'سہولیات' : 'Facilities'}
                          </h3>
                          <ul className="space-y-2">
                            {dept.facilities.map((facility, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2 text-gray-700"
                              >
                                <div className="w-2 h-2 bg-college-green-600 rounded-full"></div>
                                <span>{facility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                          <div className="text-center">
                            <Users className="w-8 h-8 mx-auto mb-2 text-college-green-600" />
                            <div className="font-display font-bold text-2xl text-gray-900">
                              {dept.faculty}
                            </div>
                            <div className="text-sm text-gray-600">
                              {isUrdu ? 'اساتذہ' : 'Faculty Members'}
                            </div>
                          </div>
                          <div className="text-center">
                            <Users className="w-8 h-8 mx-auto mb-2 text-college-green-600" />
                            <div className="font-display font-bold text-2xl text-gray-900">
                              {dept.students}
                            </div>
                            <div className="text-sm text-gray-600">
                              {isUrdu ? 'طلباء' : 'Students'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${dept.color} rounded-full opacity-10 blur-2xl`}></div>
                  </div>

                  {/* Image/Visual */}
                  <div className="relative">
                    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                      <div className={`w-full h-[400px] bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                        <dept.icon className="w-48 h-48 text-white opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-12 text-center">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              {isUrdu ? 'اپنا پسندیدہ شعبہ منتخب کریں' : 'Choose Your Path'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {isUrdu
                ? 'داخلے کے لیے ابھی درخواست دیں'
                : 'Start your academic journey with us today'
              }
            </p>
            <a
              href="/admissions"
              className="inline-block btn-primary text-lg"
            >
              {isUrdu ? 'داخلہ فارم' : 'Apply for Admission'}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Departments
