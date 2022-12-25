import React from "react";
import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";


type DoubleButtonAction = {
    onSubmit: () => void;
    disabled?: boolean;
    typeBtn?: string | 'text';
};

const DoubleButtonAction = ({ onSubmit, disabled, typeBtn }: DoubleButtonAction) => {
    return (
        <>
            <Link to={ "/profile" }>
                <CustomBtnCancel sx={ { mr: 2 } } disableElevation>
                    Cancel
                </CustomBtnCancel>
            </Link>
            <CustomBtnValid type={ typeBtn } disabled={ disabled } onClick={ onSubmit } color='primary'
                            variant="contained"
                            disableElevation>
                Save
            </CustomBtnValid>
        </>
    );
};

const CustomBtnCancel = styled(Button)(({ theme }) => ({
        '&:hover': {
            backgroundColor: theme.palette.grey[300]
        },
        background: theme.palette.grey[100],
        color: theme.palette.grey[800],
        padding: "6px 16px",
        fontSize: '0.875rem',
        textTransform: 'capitalize'
    })
);

const CustomBtnValid = styled(Button)(() => ({
        padding: "6px 16px",
        fontSize: '0.875rem',
        textTransform: 'capitalize',
        '&.Mui-disabled': {
            backgroundColor: '#c9d1eb',
            color: "#878ea8"
        }
    })
);

export default DoubleButtonAction;