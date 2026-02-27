import React, { useState } from 'react'
import FacultyCard from '../components/FacultyCard'
import { Users, Search } from 'lucide-react'

const Faculty = ({ isUrdu }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const facultyMembers = [
    {
      image: "/images/principalImg.jpeg",
      name: isUrdu ? ' شفقت حبیب آغا' : 'Shafqat Habib Agha',
      designation: isUrdu ? 'ایسوسی ایٹ پروفیسر' : 'Associate Professor',
      subject: isUrdu ? 'فزکس' : 'Political Science',
      qualification: 'M.Phil Political Science | L.L.M',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? ' محمد یعقوب رانا' : 'Muhammad Yaqoob Rana',
      designation: isUrdu ? 'پروفیسر' : 'Associate Professor',
      subject: isUrdu ? 'کیمسٹری' : 'Urdu',
      qualification: 'M.Phil Urdu',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? 'محمد اکمل' : 'Muhammad Akmal',
      designation: isUrdu ? 'اسسٹنٹ پروفیسر' : 'Assistant Professor',
      subject: isUrdu ? 'بائیولوجی' : 'Islamiat',
      qualification: 'M.Phil Islamiat',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? 'ڈاکٹر عاشق علی' : 'Dr. Ashaq Ali',
      designation: isUrdu ? 'لیکچرر' : 'Associate Professor',
      subject: isUrdu ? 'ریاضی' : 'Mathematics',
      qualification: 'MSc Mathematics',
      email: '',
      department: 'science',
    },
    {
      name: isUrdu ? 'ڈاکٹر عمر فاروق' : 'Sakhwat Ali',
      designation: isUrdu ? 'ایسوسی ایٹ پروفیسر' : 'Associate Professor',
      subject: isUrdu ? 'کمپیوٹر سائنس' : 'Urdu',
      qualification: 'M.Phil Urdu',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? 'سارہ احمد' : 'Shahzad Alam',
      designation: isUrdu ? 'لیکچرر' : 'Associate Professor',
      subject: isUrdu ? 'پروگرامنگ' : 'Biology',
      qualification: 'M.Phil Biology',
      email: '',
      department: 'science',
    },
    {
      name: isUrdu ? 'سارہ احمد' : 'Muhammad Shakeel ',
      designation: isUrdu ? 'لیکچرر' : 'Associate Professor',
      subject: isUrdu ? 'پروگرامنگ' : 'Islamiat',
      qualification: 'M.Phil Islamiat',
      email: '',
      department: 'Arts',
    },

    {
      name: isUrdu ? 'محمد اکرم' : 'Mian Riaz Ali',
      designation: isUrdu ? 'اسسٹنٹ پروفیسر' : 'Lecturer',
      subject: isUrdu ? 'ڈیٹا بیس' : 'Persian',
      qualification: 'P.hD Persian',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? 'ڈاکٹر علی حسن' : 'Muhammad Khalid Irfan',
      designation: isUrdu ? 'پروفیسر' : 'Lecturer',
      subject: isUrdu ? 'اکاؤنٹنگ' : 'Education',
      qualification: 'M.phil Education',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? 'ماریہ سلیم' : 'Tayyab Naseer',
      designation: isUrdu ? 'لیکچرر' : 'Lecturer',
      subject: isUrdu ? 'بزنس ایڈمنسٹریشن' : 'Physics',
      qualification: 'M.phil Physics',
      email: '',
      department: 'science',
    },
    {
      name: isUrdu ? 'احسان اللہ' : 'Ghayas Ahmed',
      designation: isUrdu ? 'اسسٹنٹ پروفیسر' : 'Lecturer',
      subject: isUrdu ? 'اقتصادیات' : 'Political Science',
      qualification: 'M.phil Political Science',
      email: '',
      department: 'Arts',
    },
    {
      name: isUrdu ? 'ڈاکٹر ناہید سلطانہ' : 'Muhammad Waqas',
      designation: isUrdu ? 'ایسوسی ایٹ پروفیسر' : 'Lecturer',
      subject: isUrdu ? 'اردو' : 'Chemistry',
      qualification: 'M.phil Chemistry',
      email: '',
      department: 'science',
    },
    {
      name: isUrdu ? 'زبیر احمد' : 'Ijaz Ahmed Sakia ',
      designation: isUrdu ? 'اسسٹنٹ پروفیسر' : 'Lecturer',
      subject: isUrdu ? 'انگلش' : 'Islamiat',
      qualification: 'M.phil Islamiat',
      email: '',
      department: 'arts',
    },
    {
      name: isUrdu ? 'ڈاکٹر شاہد محمود' : 'Jibran Azeem',
      designation: isUrdu ? 'پروفیسر' : 'Lecturer',
      subject: isUrdu ? 'اسلامیات' : 'Commerce',
      qualification: 'M.phil Accounting and Finance',
      email: '',
      department: 'Commerce',
    },
    {
      name: isUrdu ? 'رابعہ خان' : 'Muhammad Tahir Latif',
      designation: isUrdu ? 'لیکچرر' : 'Lecturer',
      subject: isUrdu ? 'پاکستان اسٹڈیز' : 'Health and Physical Education',
      qualification: 'M.phil Health and Physical Education',
      email: '',
      department: 'arts',
    },
    {
      name: isUrdu ? 'رابعہ خان' : 'Muhammad Umer',
      designation: isUrdu ? 'لیکچرر' : 'Lecturer',
      subject: isUrdu ? 'پاکستان اسٹڈیز' : 'Geography',
      qualification: 'BS Geography',
      email: '',
      department: 'arts',
    },
    {
      name: isUrdu ? 'رابعہ خان' : 'Muhammad Tanzeel Jibran',
      designation: isUrdu ? 'لیکچرر' : 'Librarian',
      subject: isUrdu ? 'پاکستان اسٹڈیز' : 'Library Science',
      qualification: 'M.phil Library Science',
      email: '',
      department: 'arts',
    },
  ]

  const departments = [
    { value: 'all', label: isUrdu ? 'تمام شعبہ جات' : 'All Departments' },
    { value: 'science', label: isUrdu ? 'سائنس' : 'Science' },
    { value: 'computer', label: isUrdu ? 'کمپیوٹر سائنس' : 'Computer Science' },
    { value: 'commerce', label: isUrdu ? 'تجارت' : 'Commerce' },
    { value: 'arts', label: isUrdu ? 'آرٹس' : 'Arts' },
  ]

  // Filter faculty based on search and department
  const filteredFaculty = facultyMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

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
            <Users className="w-20 h-20 mx-auto mb-4 animate-float" />
            <h1 className="font-display font-bold text-5xl md:text-6xl animate-slide-up">
              {isUrdu ? 'ہماری فیکلٹی' : 'Our Faculty'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {isUrdu
                ? 'تجربہ کار اور وقف اساتذہ'
                : 'Experienced and Dedicated Educators'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={isUrdu ? 'نام یا مضمون سے تلاش کریں...' : 'Search by name or subject...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors font-semibold text-gray-700"
              >
                {departments.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <p className="mt-4 text-gray-600">
              {isUrdu ? 'نتائج: ' : 'Showing '}
              <span className="font-bold text-college-green-600">{filteredFaculty.length}</span>
              {isUrdu ? ' اساتذہ' : ' faculty members'}
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredFaculty.map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <FacultyCard {...member} isUrdu={isUrdu} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Users className="w-24 h-24 mx-auto mb-4 text-gray-400" />
              <h3 className="font-display font-bold text-2xl text-gray-600 mb-2">
                {isUrdu ? 'کوئی نتیجہ نہیں ملا' : 'No Faculty Members Found'}
              </h3>
              <p className="text-gray-500">
                {isUrdu
                  ? 'براہ کرم اپنی تلاش کو تبدیل کریں'
                  : 'Please try adjusting your search or filter'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-college-green-600 to-pakistan-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              {isUrdu ? 'ہماری ٹیم میں شامل ہوں' : 'Join Our Faculty'}
            </h2>
            <p className="text-xl text-green-100">
              {isUrdu
                ? 'ہم تجربہ کار اور وقف اساتذہ کی تلاش میں ہیں'
                : 'We are always looking for dedicated and experienced educators'
              }
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-college-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:scale-105"
            >
              {isUrdu ? 'رابطہ کریں' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Faculty
