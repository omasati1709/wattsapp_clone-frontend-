import { Typography, Box, styled } from "@mui/material";
// import { useContext, useEffect, useState } from 'react';



const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled('img')({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

// const Timestamp = styled(Typography)`
//     font-size: 12px;
//     margin-left: auto;
//     color: #00000099;
//     margin-right: 20px;
// `;

// const Text = styled(Typography)`
//     display: block;
//     color: rgba(0, 0, 0, 0.6);
//     font-size: 14px;
// `;

const Conversation = ({ user }) => {
    return (
        <Component>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Container>
                    <Typography>{user.name}</Typography>
                </Container>
            </Box>
        </Component>
    )
}

export default Conversation
