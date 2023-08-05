import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { useNavigate, useLocation } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import axios from "axios";
function App() {
  const [term, setTerm] = useState("river");
  const per_page = 10;
  const navigate = useNavigate();
  const location = useLocation();
  const [initValue, setInitValue] = useState(
    parseInt(new URLSearchParams(location.search).get("page"), 10) || 1
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(new URLSearchParams(location.search).get("page"), 10) || 1
  );
  const minWidth = 800; // Replace with your desired minimum width
  const minHeight = 600; // Replace with your desired minimum height

  const fetchData = async () => {
    return axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXIBAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=${per_page}&orientation=horizontal&page=${currentPage}&min_width=${minWidth}&min_height=${minHeight}`
      )
      .then((res) => res.data);
  };
  const { data, isLoading, refetch, isFetching } = useQuery(
    ["image", term, currentPage],
    () => fetchData(),
    {
      staleTime: 30000,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );

  const refetchData = (text) => {
    refetch();
    navigate(`?page=${1}`);
    setTerm(text);
    setCurrentPage(1);
    setInitValue(1);
  };
  const previous = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    navigate(`?page=${currentPage - 1}`);
    setInitValue(currentPage - 1);
  };
  const next = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    navigate(`?page=${currentPage + 1}`);
    setInitValue(currentPage + 1);
  };

  //input page number
  const onSubmit = (e) => {
    e.preventDefault();

    if (parseInt(initValue) === 0) {
      return false;
    } else {
      const num = parseInt(initValue);
      setCurrentPage(num);
      navigate(`?page=${num}`);
    }
  };
  //input page number
  const onChange = (value) => {
    const regex = /^[0-9]\d*$/;

    if (regex.test(value)) {
      function removeLeadingZeros(input) {
        const regex = /(?<=\D|^)0+(\d{2})(?=\D|$)|^0+(\d{1})(?=\D|$)/g;
        return input.replace(regex, (match, p1, p2) => p1 || p2);
      }
      let data = removeLeadingZeros(value);
      setInitValue(data);
    } else {
      if (value === "") {
        setInitValue(0);
      }
    }
  };

  return (
    <>
      <div className={"bg-gray-950"}>
        <Header searchText={(text) => refetchData(text)} />

        {isLoading && data?.hits.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32 text-gray-500">
            No Images Found
          </h1>
        )}
        <div className="container mx-auto ">
          {isLoading ? (
            <div className="w-full h-screen flex justify-center items-center">
              {" "}
              <h1 className=" text-5xl text-center mx-auto  text-gray-500">
                Loading...
              </h1>{" "}
            </div>
          ) : (
            <>
              <div className="  pt-[110px]   flex justify-center gap-10 text-white ">
                <Button
                  onClick={previous}
                  currentPage={currentPage}
                  text="Previous"
                />

                <Input
                  onSubmit={onSubmit}
                  onChange={onChange}
                  initValue={initValue}
                />

                <Button onClick={next} currentPage={currentPage} text="next" />
              </div>
              <div className="  grid grid-cols-3 gap-1    ">
                {data?.hits.map((image) => (
                  <ImageCard
                    isFetching={isFetching}
                    key={image.id}
                    image={image}
                  />
                ))}
              </div>
              <div className="  py-10 flex justify-center gap-10 text-white">
                <Button
                  onClick={previous}
                  currentPage={currentPage}
                  text="Previous"
                />
                <Input
                  onSubmit={onSubmit}
                  onChange={onChange}
                  initValue={initValue}
                />
                <Button onClick={next} currentPage={currentPage} text="next" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
