import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const Modal = ({data,closeModal}) => {
const closeModalBtn = () =>{


    closeModal()
}
  return (
    <div className='fixed inset-0   flex items-center       justify-center z-50'>  
    <div className="bg-black  bg-opacity-90      rounded-md shadow-md w-full    overflow-y-auto h-full w-screen  ">
  
 
    <div className="fixed top-0 w-full flex items-center justify-between mb-10 bg-gray-800 p-4">
    <div>
    <div className="font-bold text-teal-500 text-xl ">Photo by {data.user}</div>
    <ul className='flex gap-2 text-gray-200'>
    <li>
    <strong>Views: </strong>
    {data.views}
    </li>
    <li>
    <strong>Downloads: </strong>
    {data.downloads}
    </li>
    <li>
    <strong>Likes: </strong>
    {data.likes}
    </li>
    </ul>
    </div>

  
      <button onClick={closeModalBtn} className="text-gray-500  hover:bg-gray-700 p-2 rounded transition ease-in-out delay-150"  >
     <AiOutlineClose className='' size="1.5em"/>
      </button>
    </div>
    <div className='flex justify-center items-center  mt-36  flex-col'>  
    <img src={data.src} alt="" className="w-1/2" />
    <div className='text-gray-400 italic text-center'>Photos from pixabay.com</div>
 </div>
  
  
 
  </div></div>
  )
}

export default Modal