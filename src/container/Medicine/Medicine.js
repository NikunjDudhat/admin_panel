import React, { useEffect, useState } from 'react';
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
import { Form } from 'formik';



function Medicine(props) {
    const [open, setOpen] = useState(false);
    const [Dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [showData, setShowData] = useState([]);
    const [Did, setDid] = useState('');
    const [eTital, setETital] = useState("add");
    const [udata, setUdata] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setETital('add');
    };

    const handleClickDOpen = (id) => {
        setDid(id)
        setDOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
    };

    const handleSubmit = () => {
        // console.log(name, price, quantity, expiry);

        if(udata){
            UpdataData();
        }else{

        let data = {
            id: Math.floor(Math.random() * 1000),
            name,
            price,
            quantity,
            expiry
        }
        let medicineData = JSON.parse(localStorage.getItem('medicine'));

        if (medicineData == null) {
            localStorage.setItem('medicine', JSON.stringify([data]));
        } else {
            medicineData.push(data)
            localStorage.setItem('medicine', JSON.stringify(medicineData));
        }
        handleClose();
        setName('');
        setPrice('');   
        setQuantity('');    
        setExpiry('');  
        getData();
    }
    }

    const handleDelete = () => {

        let getDataItem = JSON.parse(localStorage.getItem("medicine"));

        let GFilter = getDataItem.filter((g, i) => g.id !== Did)

        localStorage.setItem("medicine", JSON.stringify(GFilter))
        getData();
        setDOpen(false);
    }

    const handleEditOpen = (params) => {
        console.log(params.row);
        setOpen(true);
        setETital('edit');

        setDid(params.row.id);
        setName(params.row.name);
        setPrice(params.row.price);
        setQuantity(params.row.quantity);
        setExpiry(params.row.expiry);

        console.log(params.row.id);
        setUdata(true);

    }

    const UpdataData = () => {

        let localData = JSON.parse(localStorage.getItem("medicine"));
        console.log(localData);

        let ne = {
            id: Did,
            name: name,
            price: price,
            quantity: quantity,
            expiry: expiry
        }
        let setData = localData.map((s) => {
            if(s.id === Did){
                return(
                    ne
                )
            }else{
                return(
                    s
                )
            }
        })
        localStorage.setItem("medicine", JSON.stringify(setData));
        getData();
        setOpen(false);
        setDid('');
        setName('');
        setPrice('');   
        setQuantity('');    
        setExpiry('');  
    }


    const getData = () => {
        const getDataItem = JSON.parse(localStorage.getItem("medicine"));

        if (getDataItem !== null) {
            setShowData(getDataItem);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleClickDOpen(params.id)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => handleEditOpen(params)} aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        },
    ];

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={showData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{eTital === 'edit' ? "Save Medicine" : "Add Medicine"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Medicine Name"
                        fullWidth
                        value={name}
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        label="Medicine Price"
                        fullWidth
                        value={price}
                        variant="standard"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        name="quantity"
                        label="Medicine Quantity"
                        fullWidth
                        value={quantity}
                        variant="standard"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="expiry"
                        name="expiry"
                        label="Medicine Expiry Date"
                        fullWidth
                        value={expiry}
                        variant="standard"
                        onChange={(e) => setExpiry(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
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
        </div>
    );
}

export default Medicine;