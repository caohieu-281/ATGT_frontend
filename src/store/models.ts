import { LatLngExpression } from "leaflet";

export interface SearchState {
  searchIsVisible: boolean;
}

export interface MapState {
  center: any;
}

export interface PlaceState {
  places: Place[];
  selectedPlace: Place | null;
  placePreviewsIsVisible: boolean;
  placeFormIsVisible: boolean;
  prePlacePosition: LatLngExpression;
}

export interface IState {
  search: SearchState;
  places: PlaceState;
  map: MapState;
}

export interface Place {
  picture: string;
  title: string;
  description: string;
  seeMoreLink: string;
  position: LatLngExpression;
  district: string;
  isWarning: boolean;
}
