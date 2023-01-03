import { Box } from '@mui/system';
import React from 'react';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';



export const Menu = () => {
  return (
    <Box>
        <Header />
        <Search />
        <Conversations />
    </Box>
  )
}

export default Menu;