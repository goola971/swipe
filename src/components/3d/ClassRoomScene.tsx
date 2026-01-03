import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClassRoom from "./ClassRoom";

export default function ClassRoomScene() {
	return (
		<Canvas
			style={{ width: "100%", height: "100%" }}
			camera={{ position: [0, 2, 6], fov: 50 }}
		>
			<ambientLight intensity={0.6} />
			<directionalLight position={[5, 5, 5]} intensity={1} />

			<Suspense fallback={null}>
				<ClassRoom />
			</Suspense>

			<OrbitControls />
		</Canvas>
	);
}
