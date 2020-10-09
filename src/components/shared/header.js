import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const CustomLinkTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
const GroupLink = styled.div`
  margin-left: 5pt;
`;
const CustomLink = styled(Link)`
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  text-decoration: none;
`;
const HeaderDiv = styled.div`
  display: flex;
  background-color: #ff6600;
`;

const GreySpan = styled.span`
  color: dimgrey;
  cursor: not-allowed;
`;

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <HeaderDiv>
      <CustomLinkTitle to="/">Hacker News</CustomLinkTitle>
      <GroupLink>
        <CustomLink to="/newest" isActive={pathname === '/newest'}>
          new
        </CustomLink>{' '}
        |{' '}
        <GreySpan to="/past" isActive={pathname === '/past'} isUnusable>
          past
        </GreySpan>{' '}
        |{' '}
        <GreySpan to="/comments" isActive={pathname === '/comments'}>
          comments
        </GreySpan>{' '}
        |{' '}
        <CustomLink to="/ask" isActive={pathname === '/ask'}>
          ask
        </CustomLink>{' '}
        |{' '}
        <CustomLink to="/show" isActive={pathname === '/show'}>
          show
        </CustomLink>
      </GroupLink>
    </HeaderDiv>
  );
};

export default Header;
