
import React, { useState } from 'react'
import ImageCard from './components/imageCard';
import Header from './components/Header';
import {useQuery} from '@tanstack/react-query'
 import axios from 'axios'
import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [dataModal, setDataModal] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0);
  const [term, setTerm] = useState("moon")


  const fetchData = async () =>{
 return axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXIBAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=50&orientation=horizontal`).then(res => res.data)
  }
  const  {data, isLoading, refetch, isFetching} = useQuery(['image', term], ()=> fetchData(),{
    // staleTime:30000,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
 console.log('fetching: ' + isFetching);
 const refetchData = (text) =>{
  setTerm(text)
 
 
  refetch()

 }
 const clickModal = (data) =>{
  setDataModal(data)
  setOpenModal(true)
  setScrollPosition(window.scrollY);
 }
 const closeModal = () =>{
  setTimeout(()=>{
    window.scrollTo(0, scrollPosition);

  })
 ;
  setOpenModal(false)
 }  
  return (
    <>
      <div className={openModal ? 'overflow-y-hidden h-screen':'bg-gray-950'  }   > 
      {openModal && <Modal data={dataModal} closeModal={closeModal}/>}
      <Header searchText={(text) => refetchData(text) } />


      {isLoading && data?.hits.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32 text-gray-500">No Images Found</h1>}
      <div className="container mx-auto ">
  
        {isLoading?<div className='w-full h-screen flex justify-center items-center'> <h1 className=" text-5xl text-center mx-auto  text-gray-500">Loading...</h1> </div> :
          <>
 
            <div className="  grid grid-cols-3 gap-1   py-10 px-10 ">
         
     
              {  data?.hits.map(image => (
                <ImageCard key={image.id} image={image} clickModal={clickModal}  />
              ))}
            </div></>
        }
      </div>
      </div>
    </>
  );
}

export default App;
