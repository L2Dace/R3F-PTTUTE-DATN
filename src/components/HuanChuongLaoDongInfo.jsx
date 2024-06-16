/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Html, Outlines } from "@react-three/drei";
import React, { useRef, useState } from "react";
import * as THREE from "three";
export const HuanChuongLaoDongInfo = ({setCurrentStage, ...props}) => {

  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const handleClick = () => {
    setCurrentStage(2);
  };
  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    //   onClick={(event) => {
    //     event.stopPropagation();
    //     click(!clicked);
    //     if (clicked) {
    //       hover(false);
    //     }
    //   }}
    onClick={handleClick}
    >
      <sphereGeometry args={[0.1, 64, 64]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      {hovered && (
        <>
          <Outlines thickness={0.02} color="red" />
          <Html position={[-1, -0.2, 0]}>
            <div class="content">
              <p>Nhấn để hiển thị thông tin</p>
            </div>
          </Html>
        </>
      )}
      {/* {clicked && handleClick()} */}
      </mesh>
);
};
export default HuanChuongLaoDongInfo;