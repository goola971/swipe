import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ClassRoom from "./ClassRoom";

export default function ClassRoomScene() {
	return (
		<Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
			<ambientLight intensity={0.6} />
			<directionalLight position={[5, 5, 5]} intensity={1} />
			<ClassRoom />
			<OrbitControls />
		</Canvas>
	);
}
