import React, { useState } from "react";
import Modal from "./Modal";

const ImageCard = ({ image }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [dataModal, setDataModal] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const tags = image.tags.split(",");
  const lists = tags.map((tag, index) => (
    <span
      key={index}
      className="inline-block bg-gray-300 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-900 mr-2"
    >
      #{tag}
    </span>
  ));

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const clickModal = () => {
    let data = {
      src: image.webformatURL,
      user: image.user,
      views: image.views,
      likes: image.downloads,
      downloads: image.likes,
    };
    setDataModal(data);
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && <Modal data={dataModal} closeModal={closeModal} />}
      <div className="max-w-lg rounded overflow-hidden shadow-lg text-gray-400 mt-8 border border-gray-700 p-2 bg-gray-900 mx-1">
        {isImageLoaded === false ? (
          <div className="text-center text-black text-white">
            Loading Image...
          </div>
        ) : (
          " "
        )}
        <img
          onClick={clickModal}
          src={image.webformatURL}
          alt=""
          onLoad={() => handleImageLoad()}
          className={
            isImageLoaded === false ? "hidden" : "w-full cursor-pointer"
          }
        />

        <div className="text-gray-600 italic text-center">
          Photos from pixabay.com
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-teal-500 text-xl mb-2">
            Photo by {image.user}
          </div>

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
        <div className="px-4 py-4">{lists}</div>
      </div>
    </>
  );
};

export default ImageCard;
