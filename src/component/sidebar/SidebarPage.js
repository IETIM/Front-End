import React , {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './SidebarPage.css';
import { IconContext } from 'react-icons';

function SidebarPage (){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return( 
            <>
                <IconContext.Provider value = {{ color: '#fff' }}>

                    <Link to = "#" className = "menu-barsV1">
                        <FaIcons.FaBars onClick = {showSidebar}/>
                    </Link>

                    <nav className = {sidebar ? 'nav-menuV1 active': 'nav-menuV1'}>
                        <ul className = 'nav-menu-itemsV1' onClick = {showSidebar}>
                            <li className = "navbar-toggleV1">
                                <Link to = "#" className = "menu-barsV1">
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key = {index} className = {item.cName}>
                                        <Link to = {item.path}>
                                            {item.icon}
                                            <span> {item.title} </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
    );    
    
}

export default SidebarPage;