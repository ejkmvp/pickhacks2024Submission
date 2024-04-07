import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './bottomNav.css';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const BN = () => {
  return (
    <BottomNavigation sx={{ backgroundColor: "#4e6e51", height: 140 }}>
        <div className='bn'>
            <div className='item'>
                <p >University Security: </p>
                <p>Phone number: (573) 341-4300</p>
            </div>
            <div className='item'>
                <p>Student Well Being: </p>
                <p>Phone Number: (573) 341-4211</p>
                <p>Email: wellbeing@mst.edu</p>
            </div>
            <div className='item'>
                <p>Student Health Services: </p>
                <p>Phone Number: (573) 341-4284</p>
                <p>Email: mstshs@mst.edu</p>
            </div>
        </div>
    </BottomNavigation>
  );
}

export default BN;

