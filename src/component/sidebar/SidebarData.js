import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Inicio",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-textV1'
    }, 
    {
        title: "Productos",
        path: '/sellerDashboard',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-textV1'
    },
    {
        title: "Profile",
        path: '/userprofile',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-textV1'
    }
]