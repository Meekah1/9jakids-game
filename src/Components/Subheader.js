import styled from 'styled-components';

const Subhead = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-top: 15px;
  max-width: 1600px;
  height: 100px;
  background-color: #f0f4f9;
`;

// const Shape = styled.div`
//   width: 44px;
//   height: 42px;
//   margin-left: 20px;
//   /* x: 27px;
//   y: 68px; */
//   transform: skewY(15deg);
//   background-color: #002147;
// `;

const Ptext = styled.p`
  font-size: 22px;
  color: #212529;
  padding: 10px;
`;


const Subheader = () => {
  return (
    <Subhead>
      <img src='bookImg.jpg' alt='logo' width={50} height={50} /> <Ptext>9IJAKIDS</Ptext>
     
    </Subhead>
  );
}

export default Subheader;