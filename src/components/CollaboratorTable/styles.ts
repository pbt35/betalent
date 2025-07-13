import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid #E0E0E0;
  border-radius: 8px; 
  overflow: hidden; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse; 
`;

export const TableHead = styled.thead`
  background-color: #2563EB; 
  border: 1px solid #2563EB;
  color: #FFFFFF;
`;

export const TableHeaderCell = styled.th<{ hideOnMobile?: boolean }>`
  padding: 16px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  border: 1px solid #2563EB;

   @media (max-width: 768px) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'table-cell')};

    &:nth-child(2) {
      text-align: left;
      position: relative;
    }
`;

export const MobileMoreCell = styled.th`
  display: none; 
  
  @media (max-width: 768px) {
    display: table-cell;
    position: absolute;
    font-size: 24px;
    right: 25px;
    top: 10px;
  }
`;