"use client";
import { useState, useEffect } from "react";

export default function Home() {
  function generateUniqueNumber(existingNumbers) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 5000) + 1;
  } while (existingNumbers.includes(randomNumber));
  return randomNumber;
}

const generateUniqueNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 6; i++) {
    let newNumber;
    do {
      newNumber = generateUniqueNumber(numbers);
    } while (newNumber === landNumberOne || newNumber === landNumberTwo || newNumber === landNumberThree || newNumber === landNumberFour || newNumber === landNumberFive || newNumber === landNumberSix);
    numbers.push(newNumber);
  }
  return numbers;
};

const generateUniqueNumberLands = () => {
  const numbers = generateUniqueNumbers();
  const numberLands = [];
  for (let i = 0; i < 6; i++) {
    numberLands.push(Math.floor(Math.random() * 5000) + 1);
  }
  return numberLands;
};

const [landNumberOne, setLandNumberOne] = useState(generateUniqueNumbers()[0]);
const [landNumberTwo, setLandNumberTwo] = useState(generateUniqueNumbers()[1]);
const [landNumberThree, setLandNumberThree] = useState(generateUniqueNumbers()[2]);
const [landNumberFour, setLandNumberFour] = useState(generateUniqueNumbers()[3]);
const [landNumberFive, setLandNumberFive] = useState(generateUniqueNumbers()[4]);
const [landNumberSix, setLandNumberSix] = useState(generateUniqueNumbers()[5]);

const [numberLandOne, setNumberLandOne] = useState(generateUniqueNumberLands()[0]);
const [numberLandTwo, setNumberLandTwo] = useState(generateUniqueNumberLands()[1]);
const [numberLandThree, setNumberLandThree] = useState(generateUniqueNumberLands()[2]);
const [numberLandFour, setNumberLandFour] = useState(generateUniqueNumberLands()[3]);
const [numberLandFive, setNumberLandFive] = useState(generateUniqueNumberLands()[4]);
const [numberLandSix, setNumberLandSix] = useState(generateUniqueNumberLands()[5]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="font-semibold text-2xl">Pixel find land by Utomo Yoga</h1>

      <div className="p-5 w-1/3 flex justify-between">
        <button
          type="button"
          onClick={() => {
            const landtonumberOne = parseInt(numberLandOne);
            const landtonumberTwo = parseInt(numberLandTwo);
            const landtonumberThree = parseInt(numberLandThree);
            const landtonumberFour = parseInt(numberLandFour);
            const landtonumberFive = parseInt(numberLandFive);
            const landtonumberSix = parseInt(numberLandSix);
            setLandNumberOne(landtonumberOne - 1);
            setNumberLandOne(landtonumberOne - 1);
            setLandNumberTwo(landtonumberTwo - 1);
            setNumberLandTwo(landtonumberTwo - 1);
            setLandNumberThree(landtonumberThree - 1);
            setNumberLandThree(landtonumberThree - 1);
            setLandNumberFour(landtonumberFour - 1);
            setNumberLandFour(landtonumberFour - 1);
            setLandNumberFive(landtonumberFive - 1);
            setNumberLandFive(landtonumberFive - 1);
            setLandNumberSix(landtonumberSix - 1);
            setNumberLandSix(landtonumberSix - 1);
          }}
          className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Prev All
        </button>

        <button
          type="button"
          onClick={() => {
            const landtonumberOne = parseInt(numberLandOne);
            const landtonumberTwo = parseInt(numberLandTwo);
            const landtonumberThree = parseInt(numberLandThree);
            const landtonumberFour = parseInt(numberLandFour);
            const landtonumberFive = parseInt(numberLandFive);
            const landtonumberSix = parseInt(numberLandSix);
            setLandNumberOne(landtonumberOne + 1);
            setNumberLandOne(landtonumberOne + 1);
            setLandNumberTwo(landtonumberTwo + 1);
            setNumberLandTwo(landtonumberTwo + 1);
            setLandNumberThree(landtonumberThree + 1);
            setNumberLandThree(landtonumberThree + 1);
            setLandNumberFour(landtonumberFour + 1);
            setNumberLandFour(landtonumberFour + 1);
            setLandNumberFive(landtonumberFive + 1);
            setNumberLandFive(landtonumberFive + 1);
            setLandNumberSix(landtonumberSix + 1);
            setNumberLandSix(landtonumberSix + 1);
          }}
          className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3  h-screen w-full">
        {/* number one */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-full">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLandNumberOne(numberLandOne);
                }}
                className=" flex gap-2 p-3"
              >
                <label className="block">
                  <input
                    onChange={(e) => {
                      setNumberLandOne(e.target.value);
                    }}
                    className="h-10 w-full  border border-gray-300 rounded-md px-3"
                    type="number"
                    name="name"
                    placeholder="Enter land"
                  />
                </label>
                <button type="submit" className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Find
                </button>
              </form>
              <div className="p-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandOne);
                    setLandNumberOne(landtonumber - 1);
                    setNumberLandOne(landtonumber - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <h3>{landNumberOne}</h3>
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandOne);
                    setLandNumberOne(landtonumber + 1);
                    setNumberLandOne(landtonumber + 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
            <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
              <iframe
                src={`https://play.pixels.xyz/pixels/share/${landNumberOne}`}
                style={{
                  transform: "scale(1.6)",
                  transformOrigin: "0 0",
                  width: "calc(100% / 1.6)",
                  height: "calc(100% / 1.6)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
        {/* number two */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-[500px]">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLandNumberTwo(numberLandTwo);
                }}
                className=" flex gap-2 p-3"
              >
                <label className="block">
                  <input
                    onChange={(e) => {
                      setNumberLandTwo(e.target.value);
                    }}
                    className="h-10 w-full  border border-gray-300 rounded-md px-3"
                    type="number"
                    name="name"
                    placeholder="Enter land"
                  />
                </label>
                <button type="submit" className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Find
                </button>
              </form>
              <div className="p-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandTwo);
                    setLandNumberTwo(landtonumber - 1);
                    setNumberLandTwo(landtonumber - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <h3>{landNumberTwo}</h3>
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandTwo);
                    setLandNumberTwo(landtonumber + 1);
                    setNumberLandTwo(landtonumber + 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
            <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
              <iframe
                src={`https://play.pixels.xyz/pixels/share/${landNumberTwo}`}
                style={{
                  transform: "scale(1.6)",
                  transformOrigin: "0 0",
                  width: "calc(100% / 1.6)",
                  height: "calc(100% / 1.6)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
        {/* number three */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-[500px]">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLandNumberThree(numberLandThree);
                }}
                className=" flex gap-2 p-3"
              >
                <label className="block">
                  <input
                    onChange={(e) => {
                      setNumberLandThree(e.target.value);
                    }}
                    className="h-10 w-full  border border-gray-300 rounded-md px-3"
                    type="number"
                    name="name"
                    placeholder="Enter land"
                  />
                </label>
                <button type="submit" className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Find
                </button>
              </form>
              <div className="p-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandThree);
                    setLandNumberThree(landtonumber - 1);
                    setNumberLandThree(landtonumber - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <h3>{landNumberThree}</h3>
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandThree);
                    setLandNumberThree(landtonumber + 1);
                    setNumberLandThree(landtonumber + 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
            <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
              <iframe
                src={`https://play.pixels.xyz/pixels/share/${landNumberThree}`}
                style={{
                  transform: "scale(1.6)",
                  transformOrigin: "0 0",
                  width: "calc(100% / 1.6)",
                  height: "calc(100% / 1.6)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
        {/* number four */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-[500px]">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLandNumberFour(numberLandFour);
                }}
                className=" flex gap-2 p-3"
              >
                <label className="block">
                  <input
                    onChange={(e) => {
                      setNumberLandFour(e.target.value);
                    }}
                    className="h-10 w-full  border border-gray-300 rounded-md px-3"
                    type="number"
                    name="name"
                    placeholder="Enter land"
                  />
                </label>
                <button type="submit" className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Find
                </button>
              </form>
              <div className="p-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandFour);
                    setLandNumberFour(landtonumber - 1);
                    setNumberLandFour(landtonumber - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <h3>{landNumberFour}</h3>
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandFour);
                    setLandNumberFour(landtonumber + 1);
                    setNumberLandFour(landtonumber + 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
            <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
              <iframe
                src={`https://play.pixels.xyz/pixels/share/${landNumberFour}`}
                style={{
                  transform: "scale(1.6)",
                  transformOrigin: "0 0",
                  width: "calc(100% / 1.6)",
                  height: "calc(100% / 1.6)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
        {/* number five */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-[500px]">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLandNumberFive(numberLandFive);
                }}
                className=" flex gap-2 p-3"
              >
                <label className="block">
                  <input
                    onChange={(e) => {
                      setNumberLandFive(e.target.value);
                    }}
                    className="h-10 w-full  border border-gray-300 rounded-md px-3"
                    type="number"
                    name="name"
                    placeholder="Enter land"
                  />
                </label>
                <button type="submit" className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Find
                </button>
              </form>
              <div className="p-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandFive);
                    setLandNumberFive(landtonumber - 1);
                    setNumberLandFive(landtonumber - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <h3>{landNumberFive}</h3>
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandFive);
                    setLandNumberFive(landtonumber + 1);
                    setNumberLandFive(landtonumber + 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
            <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
              <iframe
                src={`https://play.pixels.xyz/pixels/share/${landNumberFive}`}
                style={{
                  transform: "scale(1.6)",
                  transformOrigin: "0 0",
                  width: "calc(100% / 1.6)",
                  height: "calc(100% / 1.6)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
        {/* number six */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-[500px]">
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLandNumberSix(numberLandSix);
                }}
                className=" flex gap-2 p-3"
              >
                <label className="block">
                  <input
                    onChange={(e) => {
                      setNumberLandSix(e.target.value);
                    }}
                    className="h-10 w-full  border border-gray-300 rounded-md px-3"
                    type="number"
                    name="name"
                    placeholder="Enter land"
                  />
                </label>
                <button type="submit" className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Find
                </button>
              </form>
              <div className="p-3 flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandSix);
                    setLandNumberSix(landtonumber - 1);
                    setNumberLandSix(landtonumber - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <h3>{landNumberSix}</h3>
                <button
                  type="button"
                  onClick={() => {
                    const landtonumber = parseInt(numberLandSix);
                    setLandNumberSix(landtonumber + 1);
                    setNumberLandSix(landtonumber + 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </div>
            <div style={{ overflow: "auto", width: "100%", height: "100%" }}>
              <iframe
                src={`https://play.pixels.xyz/pixels/share/${landNumberSix}`}
                style={{
                  transform: "scale(1.6)",
                  transformOrigin: "0 0",
                  width: "calc(100% / 1.6)",
                  height: "calc(100% / 1.6)",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
