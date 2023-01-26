import React from "react";
import {
  AutocompleteArrayInput,
  Create,
  Edit,
  NumberField,
  NumberInput,
  ReferenceArrayInput,
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
      <NumberInput source="latitude" />
      <NumberInput source="longitude" />
      <ReferenceArrayInput source="tags_ids" reference="tags">
        <AutocompleteArrayInput label="Tags" optionText={"tag_name"} />
      </ReferenceArrayInput>

      <TextInput source="city" validate={required()} />
      <TextInput source="state" validate={required()} />
      <TextInput source="address" validate={required()} />
      <TextInput
        label="Google Place Id"
        source="place_id"
        validate={required()}
      />
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
