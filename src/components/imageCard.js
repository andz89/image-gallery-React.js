import React from 'react'

const imageCard = ({ image }) => {
  const tags = image.tags.split(',')
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg text-gray-400 mt-20 border border-gray-700 p-2 bg-gray-900 mx-1">

      <img src={image.webformatURL} alt="" className="w-full" />
      <div className='text-gray-600 italic text-center'>Photos from pixabay.com</div>
      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-2">Photo by {image.user}</div>

        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-4 py-4">

        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-300 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-900 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default imageCard;