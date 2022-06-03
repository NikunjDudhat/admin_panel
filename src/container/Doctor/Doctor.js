import React, { useEffect, useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Doctor(props) {
    const [open, setOpen] = React.useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [post, setPost] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Employee Name"),
        email: yup.string().email("Please Enter Valid Email").required("Please Enter Employee Email"),
        post: yup.string().required("Please Enter Employee Post"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            post: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            let Emp_Data = {
                name,
                email,
                salary,
                post
            }
            let employeeData = JSON.parse(localStorage.getItem('employee'));
    
            if (employeeData == null) {
                localStorage.setItem('employee', JSON.stringify([Emp_Data]));
            } else {
                employeeData.push(Emp_Data)
                localStorage.setItem('employee', JSON.stringify(employeeData));
            }
    
            console.log(Emp_Data);
        },
    });

    const handleSubmit = () => {
        // setOpen(false);

        

        // localStorage.setItem("Doctor")
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Employee Data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <Formik value={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogTitle>Add Employee</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name='name'
                                id="employee_name"
                                label="Employee Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {
                                formik.errors.name ? 
                                <p className='error'>{formik.errors.name}</p> :null
                            }
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employee_email"
                                label="Employee Email"
                                type="email"
                                name='email'
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {
                                formik.errors.email ? 
                                <p className='error'>{formik.errors.email}</p> :null
                            }
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employee_salary"
                                label="Employee Salary"
                                name='salary'
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="employee_post"
                                label="Employee Post"
                                name='post'
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {
                                formik.errors.post ? 
                                <p className='error'>{formik.errors.post}</p> :null
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' onClick={handleSubmit}>Add</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
        </div>
    );
}

export default Doctor;