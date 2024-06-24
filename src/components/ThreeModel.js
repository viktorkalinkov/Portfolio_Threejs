  import React, { useRef, useEffect, Suspense } from 'react';
  import { Canvas, useFrame } from '@react-three/fiber';
  import { OrbitControls, useGLTF, Html } from '@react-three/drei';

  const Model = (props) => {
    const group = useRef();
    const { scene } = useGLTF('/models/HomePage/scene.gltf');

    // References to the objects
    const orbRefs = useRef([]);
    const plateRefs = useRef([]);
    const leftEyeRef = useRef();
    const rightEyeRef = useRef();

    useEffect(() => {
      // Initialize the refs array
      orbRefs.current = [];
      plateRefs.current = [];

      // Log the names of all objects in the scene and find the target objects
      scene.traverse((child) => {
        console.log(child.name);
        if (
          child.name === 'Orb' ||
          child.name.startsWith('Orb')
        ) {
          orbRefs.current.push(child);
        }
        else if(child.name === 'Plate' ||
          child.name.startsWith('Plate')
        ){
          plateRefs.current.push(child);
        }
        else if(child.name === 'Right_Eye'){
          rightEyeRef.current = child;
        }
        else if(child.name === 'Left_Eye'){
          leftEyeRef.current = child;
        }
      });
    }, [scene]);

    useFrame(({ clock }) => {
      orbRefs.current.forEach((orb, index) => {
        const time = clock.getElapsedTime();
        const offset = index * Math.PI / 4; // Phase offset for each orb
        orb.position.x = 1 + Math.sin(time + offset) * 0.5; // Moving up and down
        orb.position.y = 1 + Math.sin(time + offset) * 0.5; // Moving up and down
      });
      plateRefs.current.forEach((plate, index) => {
        const time = clock.getElapsedTime();
        const offset = index * Math.PI /4;
        plate.position.z = 1 + Math.sin(time + offset) * 0.5;
      });

      const blinkSpeed = 0.005; // Speed of the blinks
      const blinkFrequency = 1; // Frequency of the blinks
      const blink = Math.abs(Math.sin(clock.getElapsedTime() * blinkFrequency)) < blinkSpeed;

      if(leftEyeRef.current && rightEyeRef.current){
        const scale = blink ? 0.01 : 1;
        leftEyeRef.current.scale.set(1, scale, 1);
        rightEyeRef.current.scale.set(1, scale, 1);
      }
    });

    return <primitive ref={group} object={scene} {...props} />;
  };

  const ThreeModel = () => {
    return (
      <Canvas style={{ background: 'linear-gradient(to right, #000428, #100028)' }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <spotLight position={[15, 20, 5]} angle={0.3} />
        <Suspense fallback={<Html><div>Loading...</div></Html>}>
          <Model position={[3, -2, 0]} scale={[0.2, 0.2, 0.2]} rotation={[0, -1.65, 0]} />
        </Suspense>
        <OrbitControls enableRotate={false} enablePan={false} enableZoom={false} />
      </Canvas>
    );
  };

  export default ThreeModel;
