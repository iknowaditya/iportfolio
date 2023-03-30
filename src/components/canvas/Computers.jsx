import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
//import { Mesh } from "@react-three/fiber";

import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="yellow" />
//       <pointLight intensity={2} />
//       <spotLight
//         position={[-20, 80, 10]}
//         angle={0.12}
//         penumbra={0.5}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.1 : 0.0900}
//         position={ isMobile ? [0.4, -3, -2.2] : [0.3, -3.5, -0.5]}
//         rotation={[-0.01, -0.2, 0]}
//       />
//     </mesh>
//   );
// };

const ComputersCanvas = () => {
  //const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Add a listener for change to the screen size..
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //   setIsMobile(mediaQuery.matches);


  //   // Define a callBack function to handle changes in media quarry..
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   // Add a call back function as a listener for change to the media quarry..

  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted..

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  // return (
  //   <Canvas
  //     frameloop="demand"
  //     shadows
  //     camera={{ position: [20, 3, 5], fov: 25 }}
  //     gl={{ preserveDrawingBuffer: true }}
  //   >
  //     <Suspense fallback={<CanvasLoader />}>
  //       <OrbitControls
  //         autoRotate
  //         enableZoom={false}
  //         maxPolarAngle={Math.PI / 2}
  //         minPolarAngle={Math.PI / 2}
  //       />
  //       <Computers isMobile={isMobile} />
  //     </Suspense>
  //     <Preload all />
  //   </Canvas>
  // );
};

export default ComputersCanvas;
