"use client";
import { useState, useEffect } from "react";

export default function Home({ initialLandNumbers }) {
  const [landNumberOne, setLandNumberOne] = useState(initialLandNumbers ? initialLandNumbers[0] : null);
  const [numberLandOne, setNumberLandOne] = useState(generateRandomNumber());
  const [landNumberTwo, setLandNumberTwo] = useState(initialLandNumbers ? initialLandNumbers[1] : null);
  const [numberLandTwo, setNumberLandTwo] = useState(generateRandomNumber());
  const [landNumberThree, setLandNumberThree] = useState(initialLandNumbers ? initialLandNumbers[2] : null);
  const [numberLandThree, setNumberLandThree] = useState(generateRandomNumber());
  const [landNumberFour, setLandNumberFour] = useState(initialLandNumbers ? initialLandNumbers[3] : null);
  const [numberLandFour, setNumberLandFour] = useState(generateRandomNumber());
  const [landNumberFive, setLandNumberFive] = useState(initialLandNumbers ? initialLandNumbers[4] : null);
  const [numberLandFive, setNumberLandFive] = useState(generateRandomNumber());
  const [landNumberSix, setLandNumberSix] = useState(initialLandNumbers ? initialLandNumbers[5] : null);
  const [numberLandSix, setNumberLandSix] = useState(generateRandomNumber());

  useEffect(() => {
    if (initialLandNumbers) {
      setLandNumberOne(initialLandNumbers[0]);
      setLandNumberTwo(initialLandNumbers[1]);
      setLandNumberThree(initialLandNumbers[2]);
      setLandNumberFour(initialLandNumbers[3]);
      setLandNumberFive(initialLandNumbers[4]);
      setLandNumberSix(initialLandNumbers[5]);
    }
  }, []);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 5000) + 1;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="font-semibold text-2xl">Pixel find land by Utomo Yoga</h1>
      <div className="p-5 ">
        <button
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
          type="button"
          className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Random All
        </button>
      </div>
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

      <div className="grid grid-cols-2 md:grid-cols-3 w-full">
        {/* number one */}
        <div className="  items-center p-2  w-full">
          <div className=" flex flex-col h-[500px]">
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
      </div>
      <div className="p-5  w-1/3 flex justify-between">
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
      <div className="grid grid-cols-2 md:grid-cols-3 w-full">
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

Home.getInitialProps = async () => {
  const initialLandNumbers = Array(6).fill(null).map(generateRandomNumber);
  return { initialLandNumbers };
};
