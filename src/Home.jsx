/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import ObjectInformation from "./components/ObjectInformation.jsx";
import UTEInfo from "./components/UTEInfo.jsx";
import HuanChuongLaoDongInfo from "./components/HuanChuongLaoDongInfo.jsx";
import CoThiDuaInfo from "./components/CoThiDuaInfo.jsx";

const Home = () => {
  const [showInstruction, setShowInstruction] = useState(true);
  const [showUI, setShowUI] = useState(true);
  const [showSound, setShowSound] = useState(true);

  const [currentStage, setCurrentStage] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "KeyH") {
        setShowUI((prevShowUI) => !prevShowUI);
      }
      if (event.code === "KeyI") {
        setShowInstruction((prevShowInstruction) => !prevShowInstruction);
      }
      if (event.code === "KeyM") {
        setShowSound((prevShowSound) => !prevShowSound);
      }
      if (event.code === "KeyC") {
        setCurrentStage(null);
        // const popupElement = document.getElementById("popup");
        // if (popupElement) {
        //   popupElement.style.display = "none";
        // }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleInstructionButtonClick = () => {
    setShowInstruction((prevShowInstruction) => !prevShowInstruction);
  };
  const exitInstruction = () => {
    setShowInstruction(false);
  };
  const handleSoundButtonClick = () => {
    setShowSound((prevShowSound) => !prevShowSound);
  };

  

  return (
    <div
      id="container"
      className="w-full h-screen relative flex justify-center items-center "
    >
      {showInstruction && (
        <div
          onClick={exitInstruction}
          id="instruction"
          className="absolute z-10 flex flex-col w-4/5 h-auto bg-black/30 rounded-2xl backdrop-filter backdrop-blur-sm cursor-pointer "
        >
          {/* {currentStage && <ObjectInformation currentStage={currentStage} />} */}
          {/* <!-- Header --> */}
          <div className="flex w-full h-auto justify-center items-center">
            <div className="flex w-10/12 h-auto py-3 justify-center items-center text-4xl font-bold">
              HƯỚNG DẪN
            </div>
            {/* <div onClick={document.getElementById('instruction').close()} className="flex w-1/12 h-auto justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div> */}
            {/* <!--Header End--> */}
          </div>
          {/* <!-- Modal Content--> */}
          <div className="flex flex-col w-full h-full py-10 px-2 justify-center items-center rounded text-center text-2xl text-white-500">
            <p>A/S/W/D để di chuyển</p>
            <p>V: Thay đổi góc nhìn</p>
            <p>Shift: Chạy</p>
            <p>Space: Nhảy</p>
            <p>E: Hành động đặc biệt</p>
          </div>
          {/* <!-- End of Modal Content--> */}
          <div className="bottom-0 flex flex-col w-full h-full py-10 px-2 justify-center items-center rounded text-center font-thin text-sm text-white-500">
            <p>Nhấn vào màn hình để tắt hướng dẫn</p>
          </div>
        </div>
      )}

      {/* Popup thong tin */}
      <div id="popup" className="absolute z-10 flex flex-col w-4/5 h-auto bg-black/30 rounded-2xl backdrop-filter backdrop-blur-sm cursor-pointer ">
      {currentStage && <ObjectInformation currentStage={currentStage} />}
      </div>

      {/* UI BUTTON */}
      {showUI && (
        <>
          <button
            id="InstructionButton"
            onClick={handleInstructionButtonClick}
            className="absolute bottom-5 right-5 z-10 rounded-full bg-black/30 w-8 h-8 justify-center items-center shadow-md cursor-pointer"
          >
            {/* <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          ?
        </span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </button>
          <button
            id="SoundButton"
            onClick={handleSoundButtonClick}
            className="absolute bottom-14 right-5 z-10 rounded-full bg-black/30 w-8 h-8 justify-center items-center shadow-md cursor-pointer"
          >
            {showSound ? (
              <svg
              id="mute"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-2 -2 28 28"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            ) : (
              <svg
              id="unmute"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-2 -2 28 28"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            )}
          </button>
        </>
      )}

      <div className="aim"></div>
      <Canvas shadows>
        <UTEInfo setCurrentStage={setCurrentStage} position={[0, 2, -9]} />
        <HuanChuongLaoDongInfo setCurrentStage={setCurrentStage} position={[-7.8, 2.5, -3]} />
        <CoThiDuaInfo setCurrentStage={setCurrentStage} position={[-5.4, 2, -8.1]} />
        <App />
      </Canvas>
      <Loader />
    </div>
  );
};

export default Home;
