import React from 'react';
import { Create, Edit, required, SimpleForm, TextInput } from 'react-admin';

export const CategoryCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="category_name" validate={required()}/>
        </SimpleForm>
    </Create>
);

export const CategoryEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="category_name" validate={required()}/>
        </SimpleForm>
    </Edit>
);