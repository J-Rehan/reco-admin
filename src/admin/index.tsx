import { Admin, Resource } from "react-admin";
import dataProvider from "../dataProvider";
import CategoriesList from "./components/categories/CategoriesList";
import { CategoryCreate, CategoryEdit } from "./components/categories/CategoryForm";
import PinsList from "./components/pins/PinsList";
import { TagCreate, TagEdit } from "./components/tags/TagForm";
import TagsList from "./components/tags/TagsList";
import UserList from "./components/users/UserList";


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="categories" list={CategoriesList} create={CategoryCreate} edit={CategoryEdit} />
    <Resource name="tags" list={TagsList} create={TagCreate} edit={TagEdit} />
    <Resource name="pins" list={PinsList} />

  </Admin>
);

export default App;