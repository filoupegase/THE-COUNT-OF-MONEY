import React from 'react';
import { Box } from "@mui/material";


type AdminSettingsProps = {
    title?: string;
};

const AdminSettings = ({ title = 'salut admin' }: AdminSettingsProps) => {
    return (
        <>
            <Box sx={ { pt: 5, pb: 5 } }>
                { title }
            </Box>
        </>
    )
};

export default AdminSettings;