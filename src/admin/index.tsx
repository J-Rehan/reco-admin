import { Admin, Resource } from "react-admin";
import dataProvider from "../dataProvider";
import CategoriesList from "./components/categories/CategoriesList";
import { CategoryCreate, CategoryEdit } from "./components/categories/CategoryForm";
import PinsList from "./components/pins/PinsList";
import { TagCreate, TagEdit } from "./components/tags/TagForm";
import TagsList from "./components/tags/TagsList";
import UserList from "./components/users/UserList";
import { FirebaseAuthProvider } from "react-admin-firebase";
import config from "./config/config";
import { UserShow } from "./components/users/UserShow";
import { PinCreate } from "./components/pins/PinForm";
import PinsTrendingList from "./components/pins/PinsTrendingList";


const options = {};
const authProvider = FirebaseAuthProvider(config.firebaseConfig, options);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} show={UserShow}/>
    <Resource name="categories" list={CategoriesList} create={CategoryCreate} edit={CategoryEdit} />
    <Resource name="tags" list={TagsList} create={TagCreate} edit={TagEdit} />
    <Resource name="pins" list={PinsList} create={PinCreate}/>
    <Resource options={{ label: 'Trending Pins' }}  name="pins/trending" list={PinsTrendingList} />
  </Admin>
);

export default App;