import styled from 'styled-components';
import Button from '../Button';

const Subhead = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-top: 15px;
  max-width: 1600px;
  height: 100px;
  background-color: #f0f4f9;
`;

const Ptext = styled.p`
  font-size: 22px;
  color: #212529;
  padding: 10px;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  padding: 20px;
  font-weight: bold;
  color: #002147;
  font-size: 16px;
  list-style: none;
`;

const Subheader = () => {
  return (
    <Subhead>
      <img src='bookImg.jpg' alt='logo' width={60} height={50} />{' '}
      <Ptext>9IJAKIDS</Ptext>
      <RightBox>
        <Ul>
          <Li>Home</Li>
          <Li>About</Li>
          <Li>Game</Li>
          <Li>Competition</Li>
        </Ul>
        <Button color='#fdc800' text='Register' />
      </RightBox>
    </Subhead>
  );
};

export default Subheader;
