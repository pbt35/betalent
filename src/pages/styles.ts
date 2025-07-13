import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #F3F4F6;
  padding: 20px 30px 50px;
  min-height: calc(100vh - 60px);
`;


export const DashboardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #1F2937;
`;