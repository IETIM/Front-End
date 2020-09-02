import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Inicio",
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-textV1'
    }, 
    {
        title: "Productos",
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-textV1'
    },
    {
        title: "Reportes",
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-textV1'
    },
    {
        title: "Cerrar Sesión",
        path: '/signout',
        icon: <CgIcons.CgLogOff />, //<CgIcons.CgLogOff>  CgLogOut
        cName: 'nav-textV1'
    }
]