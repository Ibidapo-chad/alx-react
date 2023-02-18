import courseReducer, { initialCourseState } from "./courseReducer";
import notificationReducer, { initialNotificationState } from "./notificationReducer";
import uiReducer, {initialReducerState} from "./uiReducer";
import { Map } from "immutable";
import { combineReducers } from "redux";

export const initialRootState = {
    course: Map(initialCourseState),
    notifications: Map(initialNotificationState),
    ui: Map(initialReducerState),
};

const combineSliceReducers = {
    course: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
};

const rootReducer= combineReducers(combineSliceReducers);

export default rootReducer;