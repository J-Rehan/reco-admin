import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
 
} from "react-admin";
import CustomPagination from "../pagination/pagination";


const UserFilter = (props:any) => {
    // useEffect(() => {
    //   console.log("PROPS IN USER FILTER ARE : ", props);
    //   if (
    //     props.location.search === "" &&
    //     Object.keys(props.filterValues).length > 0
    //   ) {
    //     props.setFilters({}, []);
    //   }
    // }, [props.location.search]);
    return (
      <Filter {...props}>
        <TextInput label="Search" source="search" alwaysOn />
        <TextInput label="Name" source="name" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" />

      </Filter>
    );
  };

const UserList = (props:any) => (
    <List {...props}
    perPage={50}
    sort={{ field: "created_at", order: "DESC" }}
    filters={<UserFilter {...props} />}
    pagination={<CustomPagination />}
    >
        <Datagrid>
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="phone_number" />

        </Datagrid>
    </List>
);

export default UserList;
