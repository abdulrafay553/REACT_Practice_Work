import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    alignContent: 'center',
};

export default function MyShop() {

    const [shopData, setShopData] = useState([])

    // For Model
    const [modalTitle, setModalTitle] = React.useState([]);
    const [modalImage, setModalImage] = React.useState([]);
    const [modalPrice, setModalPrice] = React.useState([]);
    const [modalDiscription, setModalDiscription] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = (title, image, price, discription) => {
        // Additional logic to fetch or set data before opening the modal
        const newTitle = `${title}`;
        const newImage = `${image}`;
        const newPrice = `${price}`;
        const newDiscription = `${discription}`;
        setModalTitle(newTitle);
        setModalImage(newImage);
        setModalPrice(newPrice);
        setModalDiscription(newDiscription);

        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    // Model End

    // For Drawer
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );
    // End Drawer

    function getAllProducts() {
        var url = "https://fakestoreapi.com/products"
        axios.get(url).then((res) => {
            console.log(res.data)
            setShopData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllProducts()
    })

    return (
        <div>
            <h1 style={{ "font-family": "Brush Script MT", }} >MYSHOP</h1>
            <hr />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {shopData.map((content) => (

                        <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Card sx={{ maxWidth: '100%' }} className='h-100'>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={content.title.substring(0, 30)}
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={content.image}
                                    alt="Paella dish"
                                />
                                <CardContent >
                                    <Typography variant="body2" color="text.secondary">
                                        {content.description.substring(0, 150)}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                                <Button variant="contained" onClick={() => handleOpen(content.title, content.image, content.price, content.description)} >Show More</Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* Model */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-image">
                        <div style={{ display: 'flex', justifyContent: 'center' }}><img src={modalImage} alt='yoyo' width={'20%'}></img></div>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>Title: </b> {modalTitle}
                    </Typography>
                    <Typography id="modal-modal-price" variant="h6" component="h2">
                        <b>Price: </b> {modalPrice}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <b>Description: </b>{modalDiscription}
                    </Typography>

                    {/* Drawer */}
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)} variant='contained'>Add to Cart</Button>
                            &nbsp;
                            <Button onClick={toggleDrawer(anchor, false)} variant='contained'>Off Drawer</Button>

                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </Box>
            </Modal>


            {/* Drawer */}
            {/* {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Add to Cart</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))} */}

        </div >
    )
}