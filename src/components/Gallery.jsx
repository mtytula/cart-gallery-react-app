import React from "react";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {PreviewCartComponent} from "./PreviewCart";
import {deleteCart} from "../actions/cartActions";

export const GalleryComponent = ({carts, deleteCart}) => {
    return (
        <Grid container spacing={4}>
            {carts.map((cart) => (
                <Grid item xs={6} sm={4} key={cart.id}>
                    <PreviewCartComponent cartData={cart} deleteCart={deleteCart} />
                </Grid>
            ))}
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    carts: state.carts
});

const mapDispatchToProps = (dispatch) => ({
    deleteCart: (id) => dispatch(deleteCart(id))
})

export const Gallery = connect(mapStateToProps, mapDispatchToProps)(GalleryComponent)