/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import { PointerLockControls, Sky } from "@react-three/drei";
import {
  Environment,
  Sky,
  Html,
  Billboard,
  Text,
  Plane,
  Svg,
  Image,
} from "@react-three/drei";
import { Ground } from "./components/Ground.jsx";
import { Physics, RigidBody } from "@react-three/rapier";
import { Character } from "./components/Character.jsx";
import { useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Outlines } from "@react-three/drei";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import ObjectInformation from "./components/ObjectInformation.jsx";

// function UTEInfo(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       // scale={clicked ? 1.5 : 1}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}
//       onClick={(event) => {
//         event.stopPropagation();
//         click(!clicked);
//         if (clicked) {
//           hover(false);
//         }
//       }}
//     >
//       <sphereGeometry args={[0.1, 64, 64]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//       {hovered && (
//         <>
//           <Outlines thickness={0.02} color="red" />
//           {/* <Html position={[-1, -0.2, 0]}>
//             <div class="content">
//               <p>Click to show information</p>
//             </div>
//           </Html> */}
//         </>
//       )}
//       {/* {clicked && (
//         <>
//           <Billboard
          
//             follow={true}
//             lockX={false}
//             lockY={false}
//             lockZ={false}
//             position={[0, 0, 2]}
//             args={[3, 3]}
//           >
//             <Plane args={[5, 4]} material-color="#8797F0" out/>
//             <Image
//               url="assets/logo.png"
//               position={[-1.3, 0, 0.1]} // Move the SVG to the middle right
//               scale={[2, 2, 2]} // Adjust the size of the SVG
//               anchorX="right" // Anchor the SVG to the right
//               anchorY="middle" // Anchor the SVG to the middle
//             />

//             <Text
//               position={[0, 0, 0.1]} // Adjust text position relative to the billboard
//               fontSize={0.16}
//               outlineColor="#000000"
//               outlineOpacity={1}
//               outlineWidth="5%"
//               maxWidth={2} // Max width of the text block, adjust as needed
//               lineHeight={1} // Line height
//               textAlign={"center"}
//               color="black" // default
//               anchorX="left" // defaults
//               anchorY="middle" // default
//             >
//               Trường Đại học Sư phạm Kỹ thuật là trường công lập, thành viên của
//               Đại học Đà Nẵng được thành lập năm 2017 theo quyết định số
//               1749/QĐ-TTg của Thủ tướng Chính Phủ ngày 08/11/2017. Là trung tâm
//               đào tạo nguồn nhân lực kỹ thuật và công nghệ phục vụ cho nhu cầu
//               phát triển kinh tế - xã hội khu vực miền Trung – Tây Nguyên
//             </Text>
//           </Billboard>
//         </>
//       )} */}
//     </mesh>
//   );
// }
// function HuanChuongLaoDongInfo(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       // scale={clicked ? 1.5 : 1}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}
//       onClick={(event) => {
//         event.stopPropagation();
//         click(!clicked);
//         if (clicked) {
//           hover(false);
//         }
//       }}
//     >
//       <sphereGeometry args={[0.1, 64, 64]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//       {hovered && (
//         <>
//           <Outlines thickness={0.02} color="red" />
//           {/* <Html position={[-1, -0.2, 0]}>
//             <div class="content">
//               <p>Click to show information</p>
//             </div>
//           </Html> */}
//         </>
//       )}
//       {clicked && (
//         <>
//           <Billboard
//             follow={true}
//             lockX={false}
//             lockY={false}
//             lockZ={false}
//             position={[1.5, 0, 0]}
//             args={[3, 3]}
//           >
//             <Plane args={[5, 4]} material-color="#8797F0" />
//             <Image
//               url="/src/assets/laodong.png"
//               position={[-1.3, 0, 0.1]} // Move the SVG to the middle right
//               scale={[1, 2, 1]} // Adjust the size of the SVG
//               anchorX="right" // Anchor the SVG to the right
//               anchorY="middle" // Anchor the SVG to the middle
//             />

//             <Text
//               position={[0, 0, 0.1]} // Adjust text position relative to the billboard
//               fontSize={0.16}
//               outlineColor="#000000"
//               outlineOpacity={1}
//               outlineWidth="5%"
//               maxWidth={2} // Max width of the text block, adjust as needed
//               lineHeight={1} // Line height
//               textAlign={"center"}
//               color="black" // default
//               anchorX="left" // defaults
//               anchorY="middle" // default
//             >
//               Nhà trường đã được Chủ tịch nước tặng thưởng Huân chương Lao động hạng Ba (200) cùng nhiều bằng khen khác của Thủ tướng Chính phủ, Bộ Giáo dục & Đào tạo, Tổng cục Dạy nghề, Bộ Lao động Thương binh và Xã hội, Ủy ban nhân dân thành phố Đà Nẵng.
//             </Text>
//           </Billboard>
//         </>
//       )}
//     </mesh>
//   );
// }
// function CoThiDuaInfo(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       // scale={clicked ? 1.5 : 1}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}
//       onClick={(event) => {
//         event.stopPropagation();
//         click(!clicked);
//         if (clicked) {
//           hover(false);
//         }
//       }}
//     >
//       <sphereGeometry args={[0.1, 64, 64]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//       {hovered && (
//         <>
//           <Outlines thickness={0.02} color="red" />
//           <Html position={[-1, -0.2, 0]}>
//             <div class="content">
//               <p>Cờ trao tặng đơn vị xuất sắc <br />
//               trong phong trào thi đua năm 2018</p>
//             </div>
//           </Html>
//         </>
//       )}
//     </mesh>
//   );
// }
// function CupBongChuyenInfo(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       // scale={clicked ? 1.5 : 1}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}
//       onClick={(event) => {
//         event.stopPropagation();
//         click(!clicked);
//         if (clicked) {
//           hover(false);
//         }
//       }}
//     >
//       <sphereGeometry args={[0.1, 64, 64]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//       {hovered && (
//         <>
//           <Outlines thickness={0.02} color="red" />
//           <Html position={[-1, -0.2, 0]}>
//             <div class="content">
//               <p>Cúp vô địch bóng chuyền nữ <br />
//               đại hội thể thao cán bộ viên chức <br/>
//               năm 2023</p>
//             </div>
//           </Html>
//         </>
//       )}
//     </mesh>
//   );
// }
export const App = () => {
  return (
    <>
      {/* <PointerLockControls/> */}
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="sunset" />
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Character />
      </Physics>
      {/* <UTEInfo position={[0, 2, -9]} />
      <HuanChuongLaoDongInfo position={[-7.8, 2.5, -3]} />
      <CoThiDuaInfo position={[-5.4, 2, -8.1]}/> 
      <CupBongChuyenInfo position={[0, 2, 7]}/> */}
    </>
  );
};

export default App;
