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
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const PforHeader1 = styled.p`
  width: 120px;
  display: flex;
  margin: 20px;
  padding-right: 40px;
  font-size: 14px;
  justify-content: space-between;
`;

const PforHeader2 = styled.p`
  width: 500px;
  display: flex;
  padding: 40px;
  margin-left: 20px;
  font-size: 14px;
  justify-content: space-between;
`;



const Header = () => {
  return (
    <MainHead>
      <PforHeader2>
      <PforHeader>
          <HiLocationMarker size='22px' /> 9ijakids Lane, Lagos
      </PforHeader>
      <PforHeader>
        <HiMail size='22px' /> 9ijakids@test.com
      </PforHeader>
      </PforHeader2>
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
