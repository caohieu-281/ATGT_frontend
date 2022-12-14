import { createContext, useContext } from "react";
import { action, observable, makeObservable, computed } from "mobx";

class MapStore {
  MapInfo = {
    email: "",
    mapname: "demo",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  };

  isAuthenticated = false;

  constructor() {
    makeObservable(this, {
      MapInfo: observable,
      updateMapInfo: action,
      map: computed,
    });
  }

  updateMapInfo(mapInfo) {
    this.MapInfo = mapInfo;
  }

  get map() {
    return this.MapInfo;
  }

  setIsAuthenticated() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}

const mapStore = new MapStore();
export default mapStore;

const StoreContext = createContext();

export const MapProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const MapUseContext = () => useContext(StoreContext);
