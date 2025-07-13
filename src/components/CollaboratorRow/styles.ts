import styled from 'styled-components';


export const Row = styled.tr<{ isExpanded: boolean }>`
  border-bottom: 1px solid #E5E7EB;
  color: #1c1c1c;
  &:last-child { border-bottom: none; 
  }
`;

export const NameHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: #1c1c1c;
  
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 16px;
}
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;


export const MobileOnly = styled.div`
  display: none;
  @media (max-width: 768px) {
     display: block;
     position: relative;
     left: -37px;
  }
`;

export const DesktopOnly = styled.div`
  display: table-cell; 
  text-align: center;
`;

export const Cell = styled.td`
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  color: #1c1c1c;

  @media (max-width: 768px) {
    padding: 0; 

    tr > &:first-child {
      display: flex;
      align-items: center;
      padding: 10px 16px;
    }

    tr > &:nth-child(2) {
      flex-grow: 1;
      display: flex;
      flex-direction: column; 
    }
  }
`;


export const DetailsWrapper = styled.div<{ isExpanded: boolean }>`
  display: none; 

  @media (max-width: 768px) {
    display: block;
    overflow: hidden;
    transition: max-height 0.35s ease-in-out;
    max-height: ${({ isExpanded }) => (isExpanded ? '200px' : '0')};

    ${Cell} {
      display: flex;
      justify-content: space-between;
      padding: 10px 16px;
      border-top: 1px dashed #E0E0E0;

      &::before {
        content: attr(data-label);
        font-weight: 400;
        color: #1c1c1c; 
      }
    }
  }
`;