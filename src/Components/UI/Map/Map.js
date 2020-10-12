import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

const Map = () => {
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 31.678415, lng: 31.440262 }}
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
