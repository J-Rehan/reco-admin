import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  EditButton,
 
} from "react-admin";
import CustomPagination from "../pagination/pagination";


const CategoriesFilter = (props:any) => {

    return (
      <Filter {...props}>
        <TextInput label="Search" source="search" alwaysOn />
      </Filter>
    );
  };

const CategoriesList = (props:any) => (
    <List {...props}
    perPage={50}
    sort={{ field: "created_at", order: "DESC" }}
    filters={<CategoriesFilter {...props} />}
    pagination={<CustomPagination />}
    >
        <Datagrid rowClick={"edit"}>
            <TextField source="category_name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CategoriesList;
