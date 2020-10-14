import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

const Map = () => {
	return (
		<GoogleMap
			defaultZoom={15}
			defaultCenter={{ lat: 31.440510899999996, lng: 31.6778123 }}
		/>
	);
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MainMap() {
	return (
		<div className="py-1" style={{ width: "100%", height: "300px" }}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}
