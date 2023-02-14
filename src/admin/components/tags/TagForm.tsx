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

export const TagCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="tag_name" validate={required()} />
      <ReferenceInput
        source="linked_category_id"
        sort={{ field: "id", order: "DESC" }}
        reference="categories"
        emptyText="Select Parent Category"
      >
        <SelectInput optionText="category_name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const TagEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="tag_name" validate={required()} />
      <ReferenceInput
        source="linked_category_id"
        sort={{ field: "id", order: "DESC" }}
        reference="categories"
        emptyText="Select Parent Category"
      >
        <SelectInput optionText="category_name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
