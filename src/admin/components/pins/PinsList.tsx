import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
} from "react-admin";
import CustomPagination from "../pagination/pagination";

const PinsFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="Search By Name, State, Address" source="search" alwaysOn />

      <ReferenceInput
        source="user_id"
        sort={{ field: "id", order: "DESC" }}
        reference="users"
        emptyText="Select User"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        source="category_id"
        sort={{ field: "id", order: "DESC" }}
        reference="categories"
        emptyText="Select Category"
      >
        <SelectInput optionText="category_name" />
      </ReferenceInput>
    </Filter>
  );
};

const PinsList = (props: any) => (
  <List
    {...props}
    perPage={50}
    sort={{ field: "created_at", order: "DESC" }}
    filters={<PinsFilter {...props} />}
    pagination={<CustomPagination />}
  >
    <Datagrid>
      <ReferenceField
        label="User"
        source="user_id"
        reference="users"
        link="edit"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        label="Category"
        source="category_id"
        reference="categories"
        link="edit"
      >
        <TextField source="category_name" />
      </ReferenceField>
      <TextField source="state" />
      <TextField source="address" />
      <TextField source="latitude" />
      <TextField source="longitude" />
    </Datagrid>
  </List>
);

export default PinsList;
