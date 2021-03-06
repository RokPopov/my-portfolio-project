import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import barbershops from "./homepage/reducer";
import barbershopDetails from "./barbershopDetail/reducer";
import map from "./map/reducer";

export default combineReducers({
  appState,
  user,
  barbershops,
  barbershopDetails,
  map,
});
