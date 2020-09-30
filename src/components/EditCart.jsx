import React, {useCallback, useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {addCartToCollection, updateCart} from "../actions/cartActions";
import {getCity} from "../services/location";
import {DateTime} from 'luxon';
import {Button} from "@material-ui/core";

export const EditCartComponent = ({updateCart, addCartToCollection}) => {
    const DEFAULT_IMAGE = 'https://live.staticflickr.com/4561/38054606355_26429c884f_b.jpg'
    const DEFAULT_DATE_TIME = DateTime.local().toLocaleString(DateTime.DATE_FULL)

    const [location, setLocation] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(DEFAULT_IMAGE);
    const [datetime, setDateTime] = useState(DEFAULT_DATE_TIME);
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position => {
                getCity(position.coords.latitude, position.coords.longitude)
                    .then((response) => {
                        setLocation(`${response[0].location_type} - ${response[0].title}`)
                        updateCart({city: `${response[0].location_type} - ${response[0].title}`})
                    })
            }))
        }
        updateCart({image: DEFAULT_IMAGE, datetime: DEFAULT_DATE_TIME})
    }, [setLocation, updateCart]);

    useEffect(() => {
        updateCart({
            title,
            location,
            description,
            image,
            datetime
        });
    }, [title, location, description, image, datetime, updateCart]);

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        e.target.closest('form').blur();
        addCartToCollection({
            title,
            location,
            description,
            image,
            datetime
        });
    }, [title, location, description, image, datetime, addCartToCollection]);

    return (
        <Paper>
            <Box p={3}>
                <form noValidate autoComplete="off">
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <TextField
                        label="Location"
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value)
                        }}
                    />
                    <TextField
                        label="Datetime"
                        value={datetime}
                        onChange={(e) => {
                            setDateTime(e.target.value)
                        }}
                    />
                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                    <TextField
                        label="image source"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value)
                        }}
                    />
                    <Box display="flex" justifyContent="flex-end" mb={2} mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitHandler}
                            display="flex"
                        >
                            Add To Collection
                        </Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    );
}

const mapDispatchToProps = (dispatch) => ({
    updateCart: (cart) => dispatch(updateCart(cart)),
    addCartToCollection: (cart) => dispatch(addCartToCollection(cart))
})
export const EditCart = connect(null, mapDispatchToProps)(EditCartComponent)