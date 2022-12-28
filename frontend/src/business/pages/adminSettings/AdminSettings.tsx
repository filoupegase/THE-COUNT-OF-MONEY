import React, { PropsWithChildren } from 'react';
import { Box, Tabs, Tab } from "@mui/material";


type AdminSettingsProps = {
    title?: string;
};

type TabPanelProps = PropsWithChildren<{
    index: number;
    value: number;
}>

const AdminSettings = ({ title = 'salut admin' }: AdminSettingsProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function TabPanel(props: TabPanelProps) {
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

    return (
        <>
            <Box sx={ { pt: 5, pb: 5, bgcolor: 'background.paper' } }>
                <Box sx={ { width: '100%', bgcolor: 'background.paper' } }>
                    <Tabs value={ value } onChange={ handleChange } centered>
                        <Tab label="Crypto" />
                        <Tab label="Articles" />
                        <Tab label="Users" />
                    </Tabs>
                    <TabPanel value={ value } index={ 0 }>
                        <p>Crypto</p>
                    </TabPanel>
                    <TabPanel value={ value } index={ 1 }>
                        <p>Articles</p>
                    </TabPanel>
                    <TabPanel value={ value } index={ 2 }>
                        <p>Users</p>
                    </TabPanel>
                </Box>
            </Box>
        </>
    )
};

export default AdminSettings;