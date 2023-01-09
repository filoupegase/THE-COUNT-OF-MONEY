import React, { PropsWithChildren, useEffect } from 'react';
import { Box, Tabs, Tab, styled } from "@mui/material";
import TabPanelCrypto from "../../TabPanel/TabPanelCrypto";
import TabPanelRss from "../../TabPanel/TabPanelRss";
import { getAppSettings } from "../../../_core/_store/services/appSettings/slice";
import { useAppDispatch } from "../../../_core/_store/store";


type TabPanelProps = PropsWithChildren<{
    index: number;
    value: number;
}>

const HomeAdmin = () => {
    const appDispatch = useAppDispatch();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        const res = async () => {
            await appDispatch(
                getAppSettings()
            )
        }
        res().catch(error => console.error(error));
    }, [getAppSettings]);

    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;
        return (
            <Box
                role="tabpanel"
                hidden={ value !== index }
                id={ `simple-tabpanel-${ index }` }
                aria-labelledby={ `simple-tab-${ index }` }
                { ...other }
            >
                { value === index && (
                    <Box sx={ { pt: 4, pb: 4 } }>
                        { children }
                    </Box>
                ) }
            </Box>
        );
    }

    const StyledTabPanel = styled(TabPanel)(() => (
        { padding: '11px 30px' }
    ));

    return (
        <>
            <Box sx={ { pt: 5, pb: 5, bgcolor: 'background.paper' } }>
                <Box sx={ { width: '100%', bgcolor: 'background.paper' } }>
                    <Tabs value={ value } onChange={ handleChange } centered>
                        <Tab label="Crypto" />
                        <Tab label="Articles" />
                        <Tab label="Users" />
                    </Tabs>
                    <StyledTabPanel value={ value } index={ 0 }>
                        <TabPanelCrypto />
                    </StyledTabPanel>
                    <StyledTabPanel value={ value } index={ 1 }>
                        <TabPanelRss />
                    </StyledTabPanel>
                    <StyledTabPanel value={ value } index={ 2 }>
                        <p>Users</p>
                    </StyledTabPanel>
                </Box>
            </Box>
        </>
    )
};


export default HomeAdmin;