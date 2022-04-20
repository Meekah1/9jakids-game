import styled from 'styled-components';

const Buton = styled.div`
  width: 115px;
  height: 44px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  /* background-color: #000; */
  color: #002147;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = ({ color, text }) => {
  return <Buton style={{ backgroundColor: color }}>{text}</Buton>;
};

export default Button;
