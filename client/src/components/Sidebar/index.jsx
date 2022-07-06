import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/aboutus' onClick={toggle}>About</SidebarLink>
                {/* <SidebarLink to='/contactpage' onClick={toggle}>Contact</SidebarLink> */}
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/auth' onClick={toggle}>Join Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;