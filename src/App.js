
import React, { useState, useEffect,useRef } from 'react'
import ImageCard from './components/imageCard';
import Header from './components/Header';

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [term, setTerm] = useState("")
  const effectRan = useRef(false)
  useEffect(() => {

if(effectRan.current === false){
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXIBAY_API_KEY}&per_page=${30}&q=${term}&image_type=photo&pretty=true`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setImages(data.hits);
    setLoading(false)
  })
  .catch(err => console.log(err))
  return ()=>{
    effectRan.current = true
  }
}
}, [term])


  return (
    <>


      <Header searchText={(text) => setTerm(text)} />


      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32 text-gray-500">No Images Found</h1>}
      <div className="container mx-auto">
        {isLoading ? <h1 className="text-6xl text-center mx-auto ">Loading</h1> :
          <>
            <div className="grid grid-cols-3 gap-2 mt-10 px-10 ">

              {images.map(image => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div></>
        }
      </div>
    </>
  );
}

export default App;
