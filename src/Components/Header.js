import React from 'react';
import styled from 'styled-components';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';

const MainHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  max-width: 1600px;
  height: 48px;
  background-color: #fdc800;
`;

const PforHeader = styled.p`
  color: #212529;
  width: 300px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: auto;
  justify-content: space-between;
`;

const PforHeader1 = styled.p`
  width: 140px;
  display: flex;
  margin: auto;
  font-size: 14px;
  justify-content: space-between;
`;

const Ptext = styled.p`
  /* font-family: 'Roboto'; */
  font-size: 14px;
`;

const Header = () => {
  return (
    <MainHead>
      <PforHeader>
          <HiLocationMarker size='22px' /> 9ijakids Lane, Lagos
        <HiMail size='22px' /> 9ijakids@test.com
      </PforHeader>
      <PforHeader1>
        <FaFacebookF size='18px' />
        <BsPinterest size='18px' />
        <FaTwitter size='18px' />
        <FaInstagram size='18px' />
      </PforHeader1>
    </MainHead>
  );
};

export default Header;
