import { MoreVert } from "@mui/icons-material";
import { Menu,MenuItem ,styled} from "@mui/material";
import { useState} from 'react';
import InfoDrawer from "../../drawer/InfoDrawer";





const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {

    const [open,setOpen]=useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);


    const handleClose = () => {
        setOpen(null);
    };

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };



  return (
    <>
        <MoreVert onClick={handleClick} />
        <Menu
            anchorEl={open}
            keepMounted
            open={open}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuOption onClick={() => { handleClose(); setOpenDrawer(true) }}>Profile</MenuOption>
            <MenuOption onClick={() => { handleClose(); }}>
                {/* { showlogoutButton ?
                <Logout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </Logout> : null
            } */}
            </MenuOption>
        </Menu>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
    </>
  )
}

export default HeaderMenu;
