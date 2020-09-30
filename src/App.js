import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {EditCart} from "./components/EditCart";
import {PreviewCart} from "./components/PreviewCart";
import {Gallery} from "./components/Gallery";
import {connect} from "react-redux";
import {fetchAll} from "./actions/cartActions";

const AppComponent = ({updateCollection}) => {
    useEffect(() => {
        updateCollection()
    }, [updateCollection]);

    return (
        <Container maxWidth="md">
            <Box display="flex" p={4}>
                <Box width="40%">
                    <EditCart/>
                </Box>
                <Box width="40%" ml="auto" mt="10">
                    <PreviewCart/>
                </Box>
            </Box>
            <hr />
            <Box>
                <Gallery/>
            </Box>
        </Container>
    );
}
const mapDispatchToProps = (dispatch) => ({
    updateCollection: () => dispatch(fetchAll())
})

export const App = connect(null, mapDispatchToProps)(AppComponent);