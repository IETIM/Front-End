import React , {useState} from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import { IconContext } from 'react-icons';
import Button from '@material-ui/core/Button';
import * as FaIcons from 'react-icons/fa';
import {ShoppingData} from './ShoppingData';

function SidebarPage (props){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return( 
            <>
                <IconContext.Provider value = {{ color: '#fff' }}>
                    <Link to = "#" className = "menu-barsV2" style = {{marginLeft: 'calc(100% - 8rem)', fontSize: '2.3rem'}}>
                        <GiIcons.GiShoppingCart onClick = {showSidebar}/>
                    </Link>

                    <nav className = {sidebar ? 'nav-menuV2 active': 'nav-menuV2'} style = {{overflow: 'scroll'}}>
                        <ul className = 'nav-menu-itemsV2'>
                            <li className = "navbar-toggleV2">
                                <Link to = "#" className = "menu-barsV2" style = {{marginLeft: 'calc(100% - 4rem)'}}>
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            {props.productsCart.map((item, index) => {
                                return (
                                    <li key = {item.name + "_" + index} className = "nav-textV1">
                                        
                                            <FaIcons.FaCartPlus />
                                            <span style = {{color: 'white'}}> {item.name} </span>
                                        
                                    </li>
                                );
                            })}
                            
                            {/*<button style = {{height: '40px', width: '100%', borderRadius: '4px', marginTop: '100%', position: 'inline-block'}}>
                            Validar 
                        </button> */}
                            <Button variant="contained" color="secondary" style = {{height: '40px', width: '50%', borderRadius: '4px', position: 'inline-block'}}>
                            Vaciar Carrito
                            </Button>
                            <Button variant="contained" color="primary" style = {{height: '40px', width: '50%', borderRadius: '4px', position: 'inline-block'}}>
                            Validar Carrito
                            </Button>
                        </ul>                                                             
                    </nav>
                    
                </IconContext.Provider> 
                      
                            <br></br>                        
               
            </>
    );    
    
}

export default SidebarPage;