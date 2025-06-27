import * as THREE from 'three';
import { use, useEffect, useRef } from 'react';
import { s } from 'framer-motion/client';
import Geometries from 'three/src/renderers/common/Geometries.js';
const ThreeBackground = () => {
    const containerRef = useRef(null);

useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75, 
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    starGeometry = new THREE.BufferGeometry();
    const starmaterial = new THREE.PointsMaterial({ color: 0xffffff});
    const starvertices = [];

    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;

        starvertices.push(x, y, z);
    }

    starGeometry.setAttribute(
        'position',
         new THREE.Float32BufferAttribute(starvertices, 3)
     );

     const star = new THREE.Points(starGeometry, starmaterial);
     scene.add(star);
    camera.position.z = 1;

    const animate = () => {
        requestAnimationFrame(animate);
        star.rotation.x += 0.0005;
        star.rotation.y += 0.0005;
        renderer.render(scene, camera);
        rendererAnimationFrame(animateLoop);
    };
    animateLoop();
    
    const onwindowResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onwindowResize);
    
    return () => {
        window.removeEventListener('resize', onwindowResize);
        containerWithChildren(renderer.domElement);
        starGeometry.dispose();
        starmaterial.dispose();
        starts.geometry.dispose();
        starts.material.dispose();
        
    }

},[]) 

return(
    <div 
        ref={containerRef} 
        className="fixed top-0 left-0 w-full h-full overflow-hidden"
        style={{overflow: 'hidden'}}
    />

    
    )
}
export default ThreeBackground;

