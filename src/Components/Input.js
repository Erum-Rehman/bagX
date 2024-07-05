import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function InputText() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <Input
                        id="standard-adornment-password"
                        placeholder='Enter your Email'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                >
                                    <MailOutlineIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box >
        </>
    );
}