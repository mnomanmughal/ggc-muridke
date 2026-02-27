import React from 'react'
import { Calendar, Pin, ArrowRight } from 'lucide-react'

const NoticeBoard = ({ notices, isUrdu, showAll = false }) => {
  const displayNotices = showAll ? notices : notices.slice(0, 5)

  return (
    <div className="space-y-4">
      {displayNotices.map((notice, index) => (
        <div 
          key={index}
          className="bg-white border-l-4 border-college-green-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 group hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Notice Header */}
              <div className="flex items-start space-x-3 mb-3">
                {notice.isPinned && (
                  <Pin className="w-5 h-5 text-college-green-600 flex-shrink-0 mt-1 transform rotate-45" />
                )}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-college-green-600 transition-colors leading-tight">
                    {notice.title}
                  </h3>
                  {notice.category && (
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mt-2 ${
                      notice.category === 'urgent' 
                        ? 'bg-red-100 text-red-700'
                        : notice.category === 'exam'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {notice.category === 'urgent' && (isUrdu ? 'فوری' : 'URGENT')}
                      {notice.category === 'exam' && (isUrdu ? 'امتحان' : 'EXAM')}
                      {notice.category === 'admission' && (isUrdu ? 'داخلہ' : 'ADMISSION')}
                      {notice.category === 'event' && (isUrdu ? 'تقریب' : 'EVENT')}
                    </span>
                  )}
                </div>
              </div>

              {/* Notice Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {notice.description}
              </p>

              {/* Notice Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{notice.date}</span>
                </div>

                {notice.link && (
                  <a
                    href={notice.link}
                    className="flex items-center space-x-1 text-sm text-college-green-600 hover:text-college-green-700 font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>{isUrdu ? 'مزید پڑھیں' : 'Read More'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {!showAll && notices.length > 5 && (
        <div className="text-center pt-4">
          <a 
            href="/news"
            className="inline-flex items-center space-x-2 text-college-green-600 hover:text-college-green-700 font-semibold group"
          >
            <span>{isUrdu ? 'تمام اعلانات دیکھیں' : 'View All Notices'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </div>
  )
}

export default NoticeBoard
