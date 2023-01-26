import React from "react";
import {
  Create,
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PinCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
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
      <TextInput source="name" validate={required()} />
      <TextInput source="latitude" validate={required()} />
      <TextInput source="longitude" validate={required()} />
      <TextInput source="city" validate={required()} />
      <TextInput source="state" validate={required()} />
      <TextInput source="address" validate={required()} />
      <TextInput label="Google Place Id" source="place_id" validate={required()} />



    </SimpleForm>
  </Create>
);

export const CategoryEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="category_name" validate={required()} />
    </SimpleForm>
  </Edit>
);
