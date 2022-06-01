import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Medicine(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // let Medicine = JSON.stringify(MedicineData);

    const handleSubmit = () => {
        // console.log(name, price, quantity, expiry);

        let data = {
            name,
            price,
            quantity,
            expiry
        }
        let medicineData = JSON.parse(localStorage.getItem('medicine'));

        let medicineArray = [];
    
        if (medicineData == null) {
            localStorage.setItem('medicine', JSON.stringify([data]));
            console.log(medicineArray);
        }else{
            medicineData.push(data)
            localStorage.setItem('medicine', JSON.stringify(medicineData));    
        }
        handleClose();
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
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
        </div>
    );
}

export default Medicine;