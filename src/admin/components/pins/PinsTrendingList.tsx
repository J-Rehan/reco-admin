import {
    List,
    Datagrid,
    TextField,
  } from "react-admin";
  import CustomPagination from "../pagination/pagination";
  

  
  const PinsTrendingList = (props: any) => (
    <List
      {...props}
      perPage={50}
      sort={{ field: "created_at", order: "DESC" }}
      pagination={<CustomPagination />}
    >
      <Datagrid>
        <TextField source="names" />
        <TextField source="city" />
        <TextField source="state" />
        <TextField label="Pinned By" source="id" />
      </Datagrid>
    </List>
  );
  
  export default PinsTrendingList;
  