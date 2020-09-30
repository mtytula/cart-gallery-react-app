import React, {useCallback, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import {connect} from "react-redux";
import {CardActionArea, CardContent, CardHeader, CardMedia, Typography} from "@material-ui/core";
import styled from "styled-components";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";
import {deleteCart} from "../actions/cartActions";

export const PreviewCartComponent = ({ cartData, deleteCart }) => {
    const [isPending, setIsPending] = useState(false);
    const deleteHandler = useCallback(() => {
        setIsPending(true);
        deleteCart(cartData.id);
        setIsPending(false);
    })
    return (
        <Paper elevation={3}>
            <Card>
                <CardHeader
                    title={cartData.city}
                    subheader={cartData.datetime}
                />
                <CardActionArea>
                    {cartData.image && (
                        <ImageStyled image={cartData.image} />
                    )}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {cartData.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {cartData.description}
                        </Typography>
                    </CardContent>
                    {cartData.id && (
                        <CardActions>
                            <Button
                                size="small"
                                color="secondary"
                                onClick={deleteHandler}
                                disabled={isPending}
                            >
                                Delete
                                <CachedIcon/>
                            </Button>
                        </CardActions>
                    )}
                </CardActionArea>
            </Card>
        </Paper>
    )
}

const ImageStyled = styled(CardMedia)`
    height: 200px;
`

const mapStateToProps = (state) => ({
    cartData: state.currentCart
});

const mapDispatchToProps = (dispatch) => ({
    deleteCart: (id) => dispatch(deleteCart(id))
});

export const PreviewCart = connect(mapStateToProps, mapDispatchToProps)(PreviewCartComponent)