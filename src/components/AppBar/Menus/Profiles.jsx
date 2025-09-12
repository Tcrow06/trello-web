import React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Check from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
function Profiles() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return ( 
        <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{padding: 0 }}
                    aria-controls={open ? 'basic-menu-profiles' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar 
                        sx={{ width: 32, height: 32 }}
                        alt="Quang Thinh"
                        src="data:image/jpeg;base64,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"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu-profiles"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button-profiles',
                }}
            >
                <MenuItem >
                    <Avatar sx={{width: 28, height: 28, mr: 2}}/> Profile
                </MenuItem>
                <MenuItem >
                    <Avatar sx={{width: 28, height: 28, mr: 2}} /> My account
                </MenuItem>
                <Divider />
                <MenuItem >
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem >
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box> 
    );
}

export default Profiles;