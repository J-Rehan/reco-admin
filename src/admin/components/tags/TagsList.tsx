import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ReferenceField,
} from "react-admin";
import CustomPagination from "../pagination/pagination";

const TagsFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="search" alwaysOn />
    </Filter>
  );
};

const TagsList = (props: any) => (
  <List
    {...props}
    perPage={50}
    sort={{ field: "created_at", order: "DESC" }}
    filters={<TagsFilter {...props} />}
    pagination={<CustomPagination />}
  >
    <Datagrid rowClick={"edit"}>
      <TextField source="tag_name" />
      <ReferenceField
        label="Category"
        source="linked_category_id"
        reference="categories"
        link="edit"
      >
        <TextField source="category_name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default TagsList;
