"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [landNumberOne, setLandNumberOne] = useState(1);
  const [numberLandOne, setNumberLandOne] = useState(1);
  const [landNumberTwo, setLandNumberTwo] = useState(1);
  const [numberLandTwo, setNumberLandTwo] = useState(1);
  const [landNumberThree, setLandNumberThree] = useState(1);
  const [numberLandThree, setNumberLandThree] = useState(1);
  const [landNumberFour, setLandNumberFour] = useState(1);
  const [numberLandFour, setNumberLandFour] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <h1 className="font-semibold text-2xl">Pixel find land by Utomo Yoga</h1>
      <div className="grid grid-cols-2  h-screen w-full">
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
                    type="text"
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
                    setLandNumberOne(landNumberOne - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLandNumberOne(landNumberOne + 1);
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
                    type="text"
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
                    setLandNumberTwo(landNumberTwo - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLandNumberTwo(landNumberTwo + 1);
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
                    type="text"
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
                    setLandNumberThree(landNumberThree - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLandNumberThree(landNumberThree + 1);
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
                    type="text"
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
                    setLandNumberFour(landNumberFour - 1);
                  }}
                  className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLandNumberFour(landNumberFour + 1);
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
      </div>
    </main>
  );
}
