import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/EventReducer";
import modalReducer from "../../features/modals/ModalReducer";
import authReducer from "../../features/auth/AuthReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer
});

export default rootReducer;
