import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { connect } from "react-redux";
import {
  setPlacePreviewVisibility,
  setSelectedPlace,
} from "../../store/actions";
import { IState, Place } from "../../store/models";
import AddMarker from "./AddMarker";
import { useMap } from "react-leaflet";

import "./Map.css";

function SetCenter() {
  const map = useMap();
  map.setView([21.0277644, 105.83415979], 13); // Ha Noi
  return null;
}

const Map = ({
  location,
  isVisible,
  places,
  center,
  selectedPlace,
  togglePreview,
  setPlaceForPreview,
}: any) => {
  const defaultPosition: LatLngExpression = center; // Ha Noi position

  const showPreview = (place: Place) => {
    if (isVisible) {
      togglePreview(false);
      setPlaceForPreview(null);
    }

    if (selectedPlace?.title !== place.title) {
      setTimeout(() => {
        showPlace(place);
      }, 400);
    }
  };

  const showPlace = (place: Place) => {
    setPlaceForPreview(place);
    togglePreview(true);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        center={defaultPosition}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
        zoomControl={true}
      >
        <SetCenter />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map((place: Place) => {
          if (location && place.district) {
            if (
              location?.find((value, index) => {
                if (value === place.district) return true;
                return false;
              })
            )
              return (
                <Marker
                  key={place.title}
                  position={place.position}
                  eventHandlers={{ click: () => showPreview(place) }}
                >
                  <Tooltip>{place.title}</Tooltip>
                </Marker>
              );
          }
        })}
        <AddMarker />
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places, map } = state;
  return {
    center: map.center,
    isVisible: places.placePreviewsIsVisible,
    places: places.places,
    selectedPlace: places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePreview: (payload: boolean) =>
      dispatch(setPlacePreviewVisibility(payload)),
    setPlaceForPreview: (payload: Place) => dispatch(setSelectedPlace(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
