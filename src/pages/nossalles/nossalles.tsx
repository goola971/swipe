import ClassRoomScene from "../../components/3d/ClassRoomScene";

export default function NosSalles() {
	return (
		<div
			style={{
				width: "100%",
				height: "calc(100vh - 80px)", // header height
			}}
		>
			<ClassRoomScene />
		</div>
	);
}
