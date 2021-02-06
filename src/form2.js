import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Divider, Dropdown, Grid,Segment, Input,TextArea,Button} from 'semantic-ui-react';
import * as Yup from 'yup';
const options=[ { key: 'dz', value: 'dz', flag: 'in', text: 'India' },
{ key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
{ key: 'al', value: 'al', flag: 'al', text: 'Albania' },]

const options1=[{ key: 'dz', value: 'dz', text: 'XYZ' },
{ key: 'ax', value: 'ax', text: 'ABC' }]
const options2=[{value:'ax' ,text:'123'} ,{value:'bx',text:'124'},{value:'cd',text:'125'},{value:'re' ,text:'126'}]
class Forms extends React.Component{
    render() {
        return (
    <Formik
                initialValues={{
                    brandname: '',
                    partnumber: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    brandname: Yup.string()
                        .required('Brand Name is required'),
                    partnumber: Yup.string()
                        .required('Product Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
        render={({ errors, status, touched }) => (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500}}>
            <Segment stacked style={{padding: 2 ,backgroundColor:'#f8f8f8'}}>
               <h2 style={{color:'brown'}}>Add Update Inventory!!</h2>
               <Divider/>
               <Form style={{textAlign:'left'}}>
                <div class="form" style={{padding:10}}>
                <label htmlFor="location">Location</label>
                <div>
                    <Dropdown placeholder='Select Country' fluid search selection options={options}></Dropdown>
                </div>
                <div style={{marginTop:10}}>
                <label htmlFor="brandname">Brand Name</label>
                <Dropdown placeholder='..' fluid search selection options={options1}></Dropdown>
                </div>
                
                <div style={{marginTop:10}}>
                <label htmlFor="partnumber">Part Number</label>
                <Dropdown placeholder='..' fluid search selection options={options2}></Dropdown>
                </div>
                
                <div style={{marginTop:10}}>
                <label htmlFor="Description">Description</label>
                <TextArea placeholder="Enter.." style={{ minHeight: 70,width:445,border:'solid grey 1px' }}/>
                </div>
                <div class='triad' style={{marginTop:10}}>
                <Grid columns={3}>
                <Grid.Column>
                <label htmlFor="productname">Quantity</label>
                <div>
                    <Input fluid><Field name="productname" type="text" className={'form-control' + (errors.productname && touched.productname ? ' is-invalid' : '')} /></Input>
                    <ErrorMessage name="productname" component="div" className="invalid-feedback" />
                </div>
                </Grid.Column>
                <Grid.Column>
                <label htmlFor="productname">Min SP(Per Unit)</label>
                <div>
                    <Input fluid><Field name="productname" type="text" className={'form-control' + (errors.productname && touched.productname ? ' is-invalid' : '')} /></Input>
                    <ErrorMessage name="productname" component="div" className="invalid-feedback" />
                </div>
                </Grid.Column>
                <Grid.Column>
                <label htmlFor="productname">Expiry</label>
                <div>
                    <Input fluid><Field name="productname" type="text" className={'form-control' + (errors.productname && touched.productname ? ' is-invalid' : '')} /></Input>
                    <ErrorMessage name="productname" component="div" className="invalid-feedback" />
                </div>
                </Grid.Column>
                </Grid>
                </div>

                <div style={{marginTop:10}}>
                <label htmlFor="productname">Upload File</label>
                    <Input fluid><Field name="productname" type="text" className={'form-control' + (errors.productname && touched.productname ? ' is-invalid' : '')} /><Button>Browse</Button></Input>
                    <ErrorMessage name="productname" component="div" className="invalid-feedback" />
                </div>

                
                <div style={{marginTop:10}}>
                <label htmlFor="productname">Upload Product Picture</label>
                    <Input fluid><Field name="productname" type="text" className={'form-control' + (errors.productname && touched.productname ? ' is-invalid' : '')} /><Button>Browse</Button></Input>
                    <ErrorMessage name="productname" component="div" className="invalid-feedback" />
                </div>
                </div>
               </Form>
            </Segment>
            </Grid.Column>
        </Grid>     
        )}
    />
    )
  }
}

export default Forms;