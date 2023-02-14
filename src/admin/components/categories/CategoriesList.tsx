import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
 
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
            <TextField source="category_color" />
            <TextField source="category_icon_name" />

        </Datagrid>
    </List>
);

export default CategoriesList;
