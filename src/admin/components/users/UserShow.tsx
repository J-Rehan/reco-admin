import React from "react";
import {
  Datagrid,
  ReferenceManyField,
  Show,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const UserShow = (props: any) => (
  <Show {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email"  />
      <TextInput source="phone_number"  />

      <ReferenceManyField label="Pins" reference="pins" target="user_id">
        <Datagrid>
          <TextField source="name" />
          <TextField source="latitude" />
          <TextField source="longitude" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Show>
);
