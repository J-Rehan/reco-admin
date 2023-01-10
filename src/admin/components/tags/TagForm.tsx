import React from 'react';
import { Create, Edit, required, SimpleForm, TextInput } from 'react-admin';

export const TagCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tag_name" validate={required()}/>
        </SimpleForm>
    </Create>
);

export const TagEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="tag_name" validate={required()}/>
        </SimpleForm>
    </Edit>
);