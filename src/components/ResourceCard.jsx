import React from 'react'
import { Link } from 'react-router-dom'

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        {resource.imageUrl ? (
          <img 
            src={resource.imageUrl} 
            alt={resource.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        )}
        {/* Availability Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 text-xs font-semibold ${resource.availability ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {resource.availability ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-600 text-white mb-3">
          {resource.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">{resource.name}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {resource.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-gray-300 text-sm">{resource.capacity} people</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-300 text-sm truncate">{resource.location}</span>
          </div>
        </div>

        {/* Features */}
        {resource.features && resource.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {resource.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 border border-gray-600">
                  {feature}
                </span>
              ))}
              {resource.features.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 border border-gray-600">
                  +{resource.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Link 
          to={`/bookslot?resource=${resource._id}`}
          className="block w-full text-center bg-white text-black font-semibold py-2.5 hover:bg-gray-200 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default ResourceCard
