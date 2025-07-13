import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 290px;
`;

export const Input = styled.input`
  padding: 10px 40px 10px 15px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #A0A0A0;
  }

  &:focus {
    border-color: #2563EB;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 22px;
  right: 72px;
  transform: translateY(-50%);
  color: #A0A0A0;
  pointer-events: none;
`;