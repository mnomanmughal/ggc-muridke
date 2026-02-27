import React from 'react'
import { Download, CheckCircle, Calendar, FileText, DollarSign } from 'lucide-react'

const Admissions = ({ isUrdu }) => {
  const programs = [
    {
      name: 'FA (Faculty of Arts)',
      duration: isUrdu ? '2 سال' : '2 Years',
      eligibility: isUrdu ? 'میٹرک (آرٹس)' : 'Matriculation (Arts)',
      seats: '200',
    },
    {
      name: 'FSc Pre-Medical',
      duration: isUrdu ? '2 سال' : '2 Years',
      eligibility: isUrdu ? 'میٹرک (سائنس)' : 'Matriculation (Science)',
      seats: '150',
    },
    {
      name: 'FSc Pre-Engineering',
      duration: isUrdu ? '2 سال' : '2 Years',
      eligibility: isUrdu ? 'میٹرک (سائنس)' : 'Matriculation (Science)',
      seats: '120',
    },
    {
      name: 'ICS (Computer Science)',
      duration: isUrdu ? '2 سال' : '2 Years',
      eligibility: isUrdu ? 'میٹرک (سائنس)' : 'Matriculation (Science)',
      seats: '300',
    },
    {
      name: 'ICom (Commerce)',
      duration: isUrdu ? '2 سال' : '2 Years',
      eligibility: isUrdu ? 'میٹرک (کوئی بھی)' : 'Matriculation (Any)',
      seats: '80',
    },
    {
      name: 'Associate Degree Programs',
      duration: isUrdu ? '2 سال' : '2 Years',
      eligibility: isUrdu ? 'FA/FSc/ICS/ICom' : 'FA/FSc/ICS/ICom',
      seats: '50',
    },
  ]

  const admissionCriteria = [
    {
      title: isUrdu ? 'تعلیمی قابلیت' : 'Academic Qualification',
      description: isUrdu
        ? 'منتخب پروگرام کے لیے مطلوبہ تعلیمی قابلیت کا ہونا ضروری ہے'
        : 'Candidates must have the required academic qualification for the chosen program',
    },
    {
      title: isUrdu ? 'نمبرات' : 'Marks Requirement',
      description: isUrdu
        ? 'FA/FSc کے لیے کم از کم 45% اور BS کے لیے 50% نمبرز ضروری ہیں'
        : 'Minimum 60% marks for FA/FSc and 50% for ADP programs',
    },

  ]

  const feeStructure = [
    {
      program: 'FA/FSc/ICS/ICom',
      admission: isUrdu ? '5,000 روپے' : 'Updated Soon',
      tuition: isUrdu ? '15,000 روپے/سال' : 'Updated Soon',
      total: isUrdu ? '20,000 روپے' : 'Updated Soon',
    },
    {
      program: 'ADP Programs',
      admission: isUrdu ? '10,000 روپے' : 'Updated Soon',
      tuition: isUrdu ? '30,000 روپے/سال' : 'Updated Soon',
      total: isUrdu ? '40,000 روپے' : 'Updated Soon',
    },
  ]

  const importantDates = [
    {
      event: isUrdu ? 'فارم کی فروخت شروع' : 'Forms Available',
      date: 'March 1, 2026',
    },
    {
      event: isUrdu ? 'آخری تاریخ' : 'Last Date to Apply',
      date: 'March 31, 2026',
    },

    {
      event: isUrdu ? 'میرٹ لسٹ' : 'Merit List',
      date: 'April 20, 2026',
    },
    {
      event: isUrdu ? 'کلاسز شروع' : 'Classes Begin',
      date: 'May 1, 2026',
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
              {isUrdu ? 'داخلے 2026' : 'Admissions 2026'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {isUrdu
                ? 'اپنے مستقبل کا آغاز یہاں سے کریں'
                : 'Begin Your Journey Towards Excellence'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Programs Table Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'دستیاب پروگرامز' : 'Available Programs'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'تعلیمی پروگرامز' : 'Academic Programs'}
            </h2>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-college-green-600 to-college-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-display font-bold">
                    {isUrdu ? 'پروگرام' : 'Program'}
                  </th>
                  <th className="px-6 py-4 text-left font-display font-bold">
                    {isUrdu ? 'مدت' : 'Duration'}
                  </th>
                  <th className="px-6 py-4 text-left font-display font-bold">
                    {isUrdu ? 'قابلیت' : 'Eligibility'}
                  </th>
                  <th className="px-6 py-4 text-left font-display font-bold">
                    {isUrdu ? 'سیٹیں' : 'Seats'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-college-green-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {program.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {program.duration}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {program.eligibility}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-college-green-100 text-college-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {program.seats}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Admission Criteria Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'ضروری شرائط' : 'Requirements'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'داخلے کے معیار' : 'Admission Criteria'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {admissionCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-college-green-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                      {criteria.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {criteria.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'فیس' : 'Fees'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'فیس کی تفصیل' : 'Fee Structure'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-college-green-600 to-college-green-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-display font-bold">
                      {isUrdu ? 'پروگرام' : 'Program'}
                    </th>
                    <th className="px-6 py-4 text-left font-display font-bold">
                      {isUrdu ? 'داخلہ فیس' : 'Admission Fee'}
                    </th>
                    <th className="px-6 py-4 text-left font-display font-bold">
                      {isUrdu ? 'ٹیوشن فیس' : 'Tuition Fee'}
                    </th>
                    <th className="px-6 py-4 text-left font-display font-bold">
                      {isUrdu ? 'کل' : 'Total'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {fee.program}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {fee.admission}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {fee.tuition}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-college-green-100 text-college-green-700 px-3 py-1 rounded-full font-semibold">
                          {fee.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-blue-900 font-semibold mb-2">
                {isUrdu ? '📝 نوٹ:' : '📝 Note:'}
              </p>
              <p className="text-blue-800">
                {isUrdu
                  ? 'مالی مشکلات کا شکار طلباء کے لیے فیس میں رعایت دستیاب ہے۔ مزید معلومات کے لیے انتظامیہ سے رابطہ کریں۔'
                  : 'Fee concessions available for deserving students. Please contact the administration for more details.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-college-green-600 font-semibold text-sm uppercase tracking-wide">
              {isUrdu ? 'شیڈول' : 'Schedule'}
            </span>
            <h2 className="section-title mt-2">
              {isUrdu ? 'اہم تاریخیں' : 'Important Dates'}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-college-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-college-green-600" />
                  </div>
                  <span className="font-display font-bold text-lg text-gray-900">
                    {item.event}
                  </span>
                </div>
                <span className="text-college-green-600 font-bold">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-20 bg-gradient-to-br from-college-green-600 to-pakistan-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              {isUrdu ? 'ابھی درخواست دیں' : 'Apply Now'}
            </h2>
            <p className="text-xl text-green-100">
              {isUrdu
                ? 'داخلہ فارم ڈاؤن لوڈ کریں اور اپنی درخواست جمع کروائیں'
                : 'Download the admission form and submit your application'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="group inline-flex items-center justify-center space-x-2 bg-white text-college-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:scale-105">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                <span>{isUrdu ? 'فارم ڈاؤن لوڈ کریں' : 'Download Form'}</span>
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <span>{isUrdu ? 'استفسار کریں' : 'Contact for Inquiries'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
