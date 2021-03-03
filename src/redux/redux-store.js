import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  newsPage: newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

/*window.store = store;*/

export default store;



{/*
<application>
  <component name="FeatureUsageStatistics" first-run="1508527697488" have-been-shown="false" show-in-other="true" show-in-compilation="true">
    <feature id="editing.completion.smarttype.afternew" count="0" last-shown="0" last-used="0" shown-count="0" />
    <feature id="editing.completion.camelHumps" count="28" last-shown="0" last-used="1602674390443" shown-c*/}
