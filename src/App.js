import React, { useState } from "react";
import { Form, Input, Grid, Header, Button,Divider,Segment, Select, TextArea } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {

  const options=[   { key: 'in', value: 'in', text: 'India' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },]

  const options1=[{ key: 'dz', value: 'dz', text: 'XYZ' },
{ key: 'ax', value: 'ax', text: 'ABC' }]
const options2=[{key:'ax' ,value:'ax' ,text:'123'} ,{key:'bx',value:'bx',text:'124'},{key:'cd',value:'cd',text:'125'},{key:'re' ,value:'re' ,text:'126'}]

  const formik = useFormik({
    initialValues: {
      brandname: '',
        partnumber: '',
        location: '',
        description:'',
        quantity: '',
        min: '',
        expiry:'',
        file:'',
        product:''
    },
    validationSchema: Yup.object({
      brandname: Yup.string()
            .required('Brand Name is required'),
        partnumber: Yup.string()
            .required('Product Number is required'),
        location: Yup.string()
            .required('Required'),
        quantity: Yup.string()
            .required('Required'),
        min: Yup.string()
            .required('Required'),
        expiry: Yup.string().required("Required"),
        description: Yup.string()
            .required('Required'),
        file: Yup.string()
            .required('Required'),
        product: Yup.string()
            .required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500}}>
            <Segment stacked style={{padding:15 ,minHeight:680,backgroundColor:'#f8f8f8'}}>
               <h2 style={{color:'teal'}}>Add Update Inventory!!</h2>
               <Divider/>
               <Form style={{textAlign:'left'}}>
       <Form.Field
                control={Select}
                fluid
                search
                name="location"
                label="Location"
                placeholder="select.."
                options={options}
                onChange={(event, { name, value })=> {
                  formik.setFieldValue(name, value);
                }}
                onBlur={(event, { name, value }) => {
                  formik.handleBlur(name, value);
                }}
                value={formik.values.location}
                error={
                  formik.touched.location && formik.errors.location
                    ? formik.errors.location
                    : null
                }
         />
    
      <Form.Field
                control={Select}
                fluid
                search
                name="brandname"
                label="Brand Name"
                placeholder=".."
                options={options1}
                value={formik.values.brandname}
                onChange={(event, { name, value })=> {
                  formik.setFieldValue(name, value);
                }}
                onBlur={(event, { name, value }) => {
                  formik.handleBlur(name, value);
                }}
                value={formik.values.brandname}
                error={
                  formik.touched.brandname && formik.errors.brandname
                    ? formik.errors.brandname
                    : null
                }
      />
      
      <Form.Field
                control={Select}
                fluid
                search
                name="partnumber"
                label="Part Number"
                placeholder=".."
                options={options2}
                value={formik.values.partnumber}
                onChange={(event, { name, value })=> {
                  formik.setFieldValue(name, value);
                }}
                onBlur={(event, { name, value }) => {
                  formik.handleBlur(name, value);
                }}
                value={formik.values.partnumber}
                error={
                  formik.touched.partnumber && formik.errors.partnumber
                    ? formik.errors.partnumber
                    : null
                }
      />

      <Form.Field
                control={TextArea}
                fluid
                type="text"
                label="Description"
                name='description'
                placeholder="enter..."
                onBlur={formik.handleBlur}
                value={formik.values.description}
                error={
                  formik.touched.description && formik.errors.description
                    ? formik.errors.description
                    : null
                }
                style={{ minHeight: 70,width:445,border:'solid grey 1px',borderRadius:5 }}
                />
                
  
      <Grid columns={3}>
        <Grid.Column>
      <Form.Field
                control={Input}
                fluid
                type="text"
                label="Quantity"
                name='quantity'
                placeholder="..."
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
                error={
                  formik.touched.quantity && formik.errors.quantity
                    ? formik.errors.quantity
                    : null
                }
              /></Grid.Column>
              <Grid.Column>
        <Form.Field
                control={Input}
                fluid
                type="text"
                label="Min SP(Per Unit)"
                name='min'
                placeholder="..."
                onBlur={formik.handleBlur}
                value={formik.values.min}
                error={
                  formik.touched.min && formik.errors.min
                    ? formik.errors.min
                    : null
                }
              /></Grid.Column>

              <Grid.Column>
              <Form.Field
                control={Input}
                fluid
                type="text"
                label="Expiry"
                name='expiry'
                placeholder="..."
                onBlur={formik.handleBlur}
                value={formik.values.expiry}
                error={
                  formik.touched.expiry && formik.errors.expiry
                    ? formik.errors.expiry
                    : null
                }
              />
              </Grid.Column>
              </Grid>
              
              <label>Upload File</label><br/>
              <Form.Group>
              <Form.Field
                control={Input}
                type="upload"
                name='file'
                placeholder="..."
                onBlur={formik.handleBlur}
                value={formik.values.file}
                error={
                  formik.touched.file && formik.errors.file
                    ? formik.errors.file
                    : null
                }
              /><Button>Browse</Button></Form.Group>
              <label>Upload Product Picture</label>
              <Form.Group>
               <Form.Field
                control={Input}
                type="upload"
                name='product'
                placeholder="..."
                onBlur={formik.handleBlur}
                value={formik.values.product}
                error={
                  formik.touched.product && formik.errors.product
                    ? formik.errors.product
                    : null
                }
                
              /><Button>Browse</Button></Form.Group>

      </Form>
      <Divider style={{marginBottom:2}}/>
      <Button style={{float:'right',marginRight:10,}} color='teal' >Add+</Button>
      </Segment>
            </Grid.Column>
        </Grid>    
  );
}

export default App;
