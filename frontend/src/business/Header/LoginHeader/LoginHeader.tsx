import React, { useState } from 'react';
import { Box, DialogContent, Divider, Tabs, Tab, Typography } from "@mui/material";
import Button from "../../../_common/component/Button";
import DialogLayout from "../../../_common/component/Dialog/DialogLayout";
import DialogActions from "../../../_common/component/Dialog/DialogActions";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${ index }` }
            aria-labelledby={ `simple-tab-${ index }` }
            { ...other }
        >
            { value === index && (
                <Box sx={ { p: 3 } }>
                    { children }
                </Box>
            ) }
        </div>
    );
}

const LoginHeader = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [value, setValue] = React.useState<number>(0);

    const handleClickLogin = () => {
        setOpen(!open);
        setValue(0);
    };

    const handleClickSignUp = () => {
        setOpen(!open);
        setValue(1);
    };

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box>
            </Box>
            <Box sx={ { display: 'flex', alignItems: 'center' } }>
                <img style={ { marginRight: 12 } } height={ 20 } width={ 20 } alt='diamond logo'
                     src={ 'https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg' } />
                <Box sx={ { mr: 1 } }>
                    <Button onClick={ handleClickLogin } label='login' variant='outlined' />
                </Box>
                <Box>
                    <Button onClick={ handleClickSignUp } label='sign up' variant='contained' />
                </Box>
            </Box>
            <DialogLayout open={ open } onClose={ handleClickLogin }>
                <DialogContent>
                    <Tabs value={ value } onChange={ handleChangeTab } centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                    </Tabs>
                    <TabPanel value={ value } index={ 0 }>
                        Item One
                    </TabPanel>
                    <TabPanel value={ value } index={ 1 }>
                        <Typography>Salut deuuuuuuuuux</Typography>
                    </TabPanel>
                    <Divider>OR</Divider>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </DialogLayout>
        </>
    )
};

export default LoginHeader;