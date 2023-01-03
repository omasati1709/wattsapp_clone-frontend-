import { Dialog ,Box,Typography,List,ListItem,styled} from '@mui/material';
import { addUser } from '../../service/api';
import {useContext} from 'react';
import { qrCodeImage } from '../../constants/data';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';

const Component =styled(Box)`
    display:flex;
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px',
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
}

const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
        // await addUser(decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

  return (
    <Dialog 
        open={true}
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}
    >
        <Component>
            <Container>
                <Title>To use WhatsApp on your computer:</Title>
                  <StyledList>
                      <ListItem>1. Open WhatsApp on your phone</ListItem>
                      <ListItem>2. Tap Menu : or Settings and select Linked Devices</ListItem>
                      <ListItem>3. Tap on Link a Device</ListItem>
                      <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                  </StyledList>
            </Container>
            <Box style={{ position: 'relative' }}>
                <QRCode src={qrCodeImage} alt="qr code" />
                <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)' }}>
                      
                    <GoogleLogin
                        buttonText=""
                        onSuccess={onLoginSuccess}
                        onError={onLoginFailure}
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog;
