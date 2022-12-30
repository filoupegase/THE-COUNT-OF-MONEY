import React, { PropsWithChildren } from 'react';
import { Box, Tabs, Tab, styled } from "@mui/material";
import TabPanelCrypto from "../../TabPanel/TabPanelCrypto";


type AdminSettingsProps = {
    title?: string;
};

type TabPanelProps = PropsWithChildren<{
    index: number;
    value: number;
}>

const HomeAdmin = ({ title = 'salut admin' }: AdminSettingsProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                        <p>Articles</p>
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