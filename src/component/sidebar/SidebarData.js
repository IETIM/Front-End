import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export const SidebarData = [
    {
        title: "Inicio",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-textV1'
    }, 
    {
        title: "Mi perfil",
        path: '/userprofile',
        icon: <AccountBoxIcon />,
        cName: 'nav-textV1'
    },

    {
        title: "Productos",
        path: '/sellerDashboard',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-textV1'
    },
    {
        title: "Mis Ordenes",
        path: '/userorders',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-textV1'
    },
    {
        title: "Login",
        path: '/login',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-textV1'
    }
]