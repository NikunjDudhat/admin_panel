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



function Medicine(props) {
    const [open, setOpen] = useState(false);
    const [Dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [showData, setShowData] = useState([]);
    const [Did, setDid] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
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
        getData();

    }

    const handleDelete = () => {

        let getDataItem = JSON.parse(localStorage.getItem("medicine"));

        let GFilter = getDataItem.filter((g, i) => g.id !== Did)

        localStorage.setItem("medicine", JSON.stringify(GFilter))
        getData();
        setDOpen(false);
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
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Medicine Name"
                        fullWidth
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