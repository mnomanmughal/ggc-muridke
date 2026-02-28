import React from 'react'
import { Mail, BookOpen, Award } from 'lucide-react'

const FacultyCard = ({ name, designation, subject, qualification, email, image, isUrdu }) => {
  return (
    <div className="card hover-lift group">
      {/* Image Section */}
     <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
  {image ? (
    <img
      src={image}
      alt={name}
      className="w-full h-full object-contain object-center p-2 bg-white group-hover:scale-105 transition-transform duration-500"
    />
  ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 bg-college-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                {name.charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-college-green-600 transition-colors">
            {name}
          </h3>
          <p className="text-college-green-600 font-semibold text-sm">
            {designation}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-gray-600">
            <BookOpen className="w-4 h-4 text-college-green-500" />
            <span className="text-sm">{subject}</span>
          </div>
          
          {qualification && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Award className="w-4 h-4 text-college-green-500" />
              <span className="text-sm">{qualification}</span>
            </div>
          )}

          {email && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4 text-college-green-500" />
              <a 
                href={`mailto:${email}`}
                className="text-sm hover:text-college-green-600 transition-colors truncate"
              >
                {email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FacultyCard
