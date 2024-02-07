/*
"use client"

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { getCastDetails } from "@/pages/api";
import { useState, useEffect } from "react"

function MeshComponent() {
    const [castData, setCastData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCastDetails();
                setCastData(data)
            } catch (error) {
                console.log("Error fetching cast data", error)
            }
        };
        fetchData();
    }, [])

    const fileUrl="/models/jack_model.gltf";
    const mesh = useRef(null);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}

const Model = () => {
    return(
        <div className="flex justify-center items-center">
            <Canvas
            >
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MeshComponent />
            </Canvas>
        </div>
    )
}

export default Model
*/