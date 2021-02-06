import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Divider, Dropdown, Grid,Segment, Input,TextArea,Button, Select} from 'semantic-ui-react';
import * as Yup from 'yup';
const options=[   { key: 'in', value: 'in', text: 'India' },
  { key: 'bs', value: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', text: 'Bangladesh' },]

const options1=[{ key: 'dz', value: 'dz', text: 'XYZ' },
{ key: 'ax', value: 'ax', text: 'ABC' }]
const options2=[{key:'ax' ,value:'ax' ,text:'123'} ,{key:'bx',value:'bx',text:'124'},{key:'cd',value:'cd',text:'125'},{key:'re' ,value:'re' ,text:'126'}]
class Forms extends React.Component{
    render() {
        return (
    <Formik
                initialValues={{
                    brandname: '',
                    partnumber: '',
                    location: '',
                    description:'',
                    quantity: '',
                    min: '',
                    expiry:'',
                    file:'',
                    product:''
                }}
                validationSchema={Yup.object().shape({
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
                    expiry: Yup.string()
                        .required('Required'),
                    description: Yup.string()
                        .required('Required'),
                    file: Yup.string()
                        .required('Required'),
                    product: Yup.string()
                        .required('Required')
                        
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
                  <Select name='location'  placeholder='Select..' fluid options={options} className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')}/>
                  <ErrorMessage name="location" component="div" style={{color:'red',fontSize:12}}/>
                </div>
                <div style={{marginTop:10}}>
                <label htmlFor="brandname">Brand Name</label>
                <Select  name="brandname" placeholder='..' fluid options={options1} className={'form-control' + (errors.brandname && touched.brandname ? ' is-invalid' : '')}/>
                <ErrorMessage name="brandname" component="div" style={{color:'red',fontSize:12}}/>
                </div>
                
                <div style={{marginTop:10}}>
                <label htmlFor="partnumber">Part Number</label>
                <Select name='partnumber' placeholder='..' fluid  options={options2} className={'form-control' + (errors.partnumber && touched.partnumber ? ' is-invalid' : '')}/>
                <ErrorMessage name="partnumber" component="div" style={{color:'red',fontSize:12}}/>
                </div>
                
                <div style={{marginTop:10}}>
                <label htmlFor="Description">Description</label>
                <TextArea name= "description" placeholder="Enter.." style={{ minHeight: 70,width:445,border:'solid grey 1px' }} className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')}/>
                <ErrorMessage name="desciption" component="div" style={{color:'red',fontSize:12}}/>
                </div>
                <div class='triad' style={{marginTop:10}}>
                <Grid columns={3}>
                <Grid.Column>
                <label>Quantity</label>
                <div>
                    <Input fluid><Field name="quantity" type="text"  /></Input>
                    <ErrorMessage name="quantity" component="div" style={{color:'red',fontSize:12}}/>
                </div>
                </Grid.Column>
                <Grid.Column>
                <label>Min SP(Per Unit)</label>
                <div>
                    <Input fluid><Field name="min" type="text" className={'form-control' + (errors.min && touched.min ? ' is-invalid' : '')}  /></Input>
                    <ErrorMessage name="min" component="div" style={{color:'red',fontSize:12}} />
                </div>
                </Grid.Column>
                <Grid.Column>
                <label>Expiry</label>
                <div>
                    <Input fluid><Field name="expiry" type="text" className={'form-control' + (errors.productname && touched.productname ? ' is-invalid' : '')} /></Input>
                    <ErrorMessage name="expiry" component="div" style={{color:'red',fontSize:12}} />
                </div>
                </Grid.Column>
                </Grid>
                </div>

                <div style={{marginTop:10}}>
                <label htmlFor="file">Upload File</label>
                    <Input fluid><Field name="file" type="text" className={'form-control' + (errors.file && touched.file ? ' is-invalid' : '')} /><Button>Browse</Button></Input>
                    <ErrorMessage name="file" component="div" style={{color:'red',fontSize:12}} />
                </div>

                
                <div style={{marginTop:10}}>
                <label htmlFor="file">Upload Product Picture</label>
                    <Input fluid><Field name="product" type="text" className={'form-control' + (errors.product && touched.product ? ' is-invalid' : '')} /><Button>Browse</Button></Input>
                    <ErrorMessage name="product" component="div" style={{color:'red',fontSize:12}} />
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