import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  EditButton,
 
} from "react-admin";
import CustomPagination from "../pagination/pagination";

const TagsFilter = (props:any) => {

    return (
      <Filter {...props}>
        <TextInput label="Search" source="search" alwaysOn />
      </Filter>
    );
};

const TagsList = (props:any) => (
    <List {...props}
    perPage={50}
    sort={{ field: "created_at", order: "DESC" }}
    filters={<TagsFilter {...props} />}
    pagination={<CustomPagination />}
    >
        <Datagrid>
            <TextField source="id" />
            <TextField source="tag_name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default TagsList;
