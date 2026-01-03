import { useGLTF } from "@react-three/drei";

export default function ClassRoom() {
	const { scene } = useGLTF("/models/classe.glb");
	return <primitive object={scene} scale={0.5} />;
}
