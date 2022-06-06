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
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Doctor(props) {
    const [open, setOpen] = useState(false);
    const [Dopen, setDOpen] = useState(false);
    const [editopen, setEditOpen] = useState(false);
    const [showData, setEShowData] = useState([]);
    const [Did, setDid] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
        setEditOpen(false);
    };

    const handleClickDOpen = (id) => {
        setDid(id)
        setDOpen(true);
    };

    const handleClickEOpen = () => {
        // setDid(id)
        setEditOpen(true);
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
            salary: '',
            post: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            const {
                name,
                email,
                salary,
                post
            } = values;
            let Emp_Data = {
                id: Math.floor(Math.random() * 1000),
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
            // setOpen(false);

            getEData();
            resetForm();
        },
    });

    const getEData = () => {
        const getEDataItem = JSON.parse(localStorage.getItem("employee"));

        if (getEDataItem !== null) {
            setEShowData(getEDataItem);
        }
    }

    const handleDelete = () => {

        let getDataItem = JSON.parse(localStorage.getItem("employee"));

        let GFilter = getDataItem.filter((g, i) => g.id !== Did)

        localStorage.setItem("employee", JSON.stringify(GFilter))
        getEData();
        setDOpen(false);
    }

    useEffect(() => {
        getEData();
    }, [])

    let columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'salary', headerName: 'Salary', width: 130 },
        { field: 'post', headerName: 'Post', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleClickDOpen(params.id)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => handleClickEOpen(params.id)} aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }

        },
    ]


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
                                    <p className='error'>{formik.errors.name}</p> : null
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
                                    <p className='error'>{formik.errors.email}</p> : null
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
                                onChange={formik.handleChange}
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
                                    <p className='error'>{formik.errors.post}</p> : null
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Add</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
            <Dialog
                open={Dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure Delete Data"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => handleDelete()} autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={editopen} onClose={handleClose}>
                <DialogTitle>Edit</DialogTitle>
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
                        // onChange={formik.handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="employee_email"
                        label="Employee Email"
                        type="email"
                        name='email'
                        fullWidth
                        variant="standard"
                        // onChange={formik.handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="employee_salary"
                        label="Employee Salary"
                        name='salary'
                        type="text"
                        fullWidth
                        variant="standard"
                        // onChange={formik.handleChange}
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
                        // onChange={formik.handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={showData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </div>

    );
}

export default Doctor;