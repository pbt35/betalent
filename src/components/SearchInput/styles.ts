import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
     width: 100%;
    }
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

   @media (max-width: 768px) {
     width: calc(100% - 55px);
    }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
  transform: translateY(-50%);
  color: #A0A0A0;
  pointer-events: none;
`;