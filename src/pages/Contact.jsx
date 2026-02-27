import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = ({ isUrdu }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (this is a dummy implementation)
    alert(isUrdu ? 'آپ کا پیغام بھیج دیا گیا ہے!' : 'Your message has been sent!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: isUrdu ? 'پتہ' : 'Address',
      content: 'Main GT Road, Muridke, District Sheikhupura, Punjab, Pakistan',
    },
    {
      icon: Phone,
      title: isUrdu ? 'فون' : 'Phone',
      content: '+92-423-7990400',
      link: 'tel:+924237990400',
    },
    {
      icon: Mail,
      title: isUrdu ? 'ای میل' : 'Email',
      content: 'gc.muridke@gmail.com',
      link: 'mailto:gc.muridke@gmail.com',
    },
    {
      icon: Clock,
      title: isUrdu ? 'اوقات' : 'Working Hours',
      content: isUrdu ? 'پیر سے جمعہ: 8:00 صبح - 3:00 شام' : 'Monday - Saturday: 8:00 AM - 3:00 PM',
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
            <Mail className="w-20 h-20 mx-auto mb-4 animate-float" />
            <h1 className="font-display font-bold text-5xl md:text-6xl animate-slide-up">
              {isUrdu ? 'ہم سے رابطہ کریں' : 'Contact Us'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 animate-slide-up" style={{ animationDelay: '100ms' }}>
              {isUrdu
                ? 'ہم آپ کی مدد کے لیے حاضر ہیں'
                : "We're Here to Help"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-college-green-500 to-college-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-college-green-600 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 pattern-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                {isUrdu ? 'پیغام بھیجیں' : 'Send us a Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {isUrdu ? 'نام' : 'Full Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors"
                    placeholder={isUrdu ? 'اپنا نام درج کریں' : 'Enter your name'}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isUrdu ? 'ای میل' : 'Email'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors"
                      placeholder={isUrdu ? 'ای میل درج کریں' : 'your.email@example.com'}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {isUrdu ? 'فون نمبر' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors"
                      placeholder="+92-3XX-XXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {isUrdu ? 'موضوع' : 'Subject'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors"
                    placeholder={isUrdu ? 'پیغام کا موضوع' : 'Message subject'}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    {isUrdu ? 'پیغام' : 'Message'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-college-green-600 focus:outline-none transition-colors resize-none"
                    placeholder={isUrdu ? 'اپنا پیغام یہاں لکھیں...' : 'Write your message here...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-college-green-600 to-college-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-college-green-700 hover:to-college-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isUrdu ? 'پیغام بھیجیں' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
                  {isUrdu ? 'ہماری لوکیشن' : 'Our Location'}
                </h2>
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3390.636598624268!2d74.25052102541808!3d31.807652524083768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d31.807282899999997!2d74.2531461!4m5!1s0x391920cfe4bdcaaf%3A0x5083b6f8cda653ea!2sGovt.%20Associate%20Degree%20College%20for%20Boys%2C%20Muridke%2C%20R753%2B53W%2C%20Mohalla%20Gaddafi%20Park%20Muridke%2C%20Pakistan!3m2!1d31.8079993!2d74.25271649999999!5e0!3m2!1sen!2s!4v1772177656432!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-college-green-600 to-pakistan-green text-white rounded-2xl shadow-2xl p-8">
                <h3 className="font-display font-bold text-2xl mb-4">
                  {isUrdu ? 'فوری رابطہ' : 'Quick Contact'}
                </h3>
                <p className="text-green-100 mb-6">
                  {isUrdu
                    ? 'کسی بھی استفسار کے لیے ہم سے رابطہ کریں۔ ہماری ٹیم آپ کی مدد کے لیے تیار ہے۔'
                    : 'Feel free to reach out for any inquiries. Our team is ready to assist you.'
                  }
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+924237990400"
                    className="flex items-center space-x-3 text-white hover:text-green-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+92-423-7990400</span>
                  </a>
                  <a
                    href="mailto:gc.muridke@gmail.com"
                    className="flex items-center space-x-3 text-white hover:text-green-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>gc.muridke@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
