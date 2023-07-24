
import React, { useState } from 'react'
import ImageCard from './components/imageCard';
import Header from './components/Header';
import {useQuery} from '@tanstack/react-query'
 


function App() {
  const [term, setTerm] = useState("")


  const fetchData = async () =>{
 return await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXIBAY_API_KEY}&q=${term}&image_type=photo&pretty=true`).then((res)=>res.json())
  }
  const  {data, isLoading, refetch} = useQuery(['image', term], ()=> fetchData())

 const refetchData = (text) =>{
  setTerm(text)
  refetch()
 }


  return (
    <>
      <div className='bg-gray-950 ' > 

      <Header searchText={(text) => refetchData(text) } />


      {isLoading && data?.hits.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32 text-gray-500">No Images Found</h1>}
      <div className="container mx-auto ">
        {isLoading?<div className='w-full h-screen flex justify-center items-center'> <h1 className=" text-5xl text-center mx-auto  text-gray-500">Loading...</h1> </div> :
          <>
            <div className="  grid grid-cols-3 gap-1   py-10 px-10 ">

              {  data?.hits.map(image => (
                <ImageCard key={image.id} image={image}   />
              ))}
            </div></>
        }
      </div>
      </div>
    </>
  );
}

export default App;
