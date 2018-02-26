import { Map } from "immutable";
import driverData from "../../containers/Drivers/driverData";
import contactActions from "./actions";

const contacts = new driverData(21).getAll();

const initState = new Map({
  contacts,
  seectedId: contacts[0].id,
  editView: false
});

export default function contactReducer(state = initState, action) {
  switch (action.type) {
    case contactActions.CHANGE_CONTACT:
      return state.set("seectedId", action.id).set("editView", false);
    case contactActions.ADD_CONTACT:
      return state
        .set("contacts", action.contacts)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case contactActions.EDIT_CONTACT:
      return state.set("contacts", action.contacts);
    case contactActions.DELETE__CONTACT:
      return state
        .set("contacts", action.contacts)
        .set("seectedId", action.seectedId);
    case contactActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}

export { contacts };
