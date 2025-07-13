import React, { useState } from 'react';
import { ICollaborator } from '../../types/collaborator';
import { formatDate, formatPhone } from '../../utils/formatters';
import { Row, Cell, Avatar, MobileOnly, DesktopOnly, DetailsWrapper, NameHeader } from './styles';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface ChevronIconProps {
  isExpanded: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ isExpanded }) => {
  return isExpanded ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.25 10.25L8 5.75L3.75 10.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 5.75L8 10.25L12.25 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};


interface CollaboratorRowProps {
  collaborator: ICollaborator;
}

export const CollaboratorRow: React.FC<CollaboratorRowProps> = ({ collaborator }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

const isDesktop = useMediaQuery('(min-width: 769px)');

 return (
    <Row onClick={handleToggleExpand} isExpanded={isExpanded}>
      <Cell>
        <Avatar src={collaborator.image} alt={collaborator.name} />
      </Cell>

      <Cell style={{display: 'table-cell'}}>
        <NameHeader>
          {collaborator.name}
          <MobileOnly>
            <ChevronIcon isExpanded={isExpanded} />
          </MobileOnly>
        </NameHeader>
        
        <DetailsWrapper isExpanded={isExpanded}>
            <Cell data-label="Cargo">{collaborator.job}</Cell>
            <Cell data-label="Data de Admissão">{formatDate(collaborator.admission_date)}</Cell>
            <Cell data-label="Telefone">{formatPhone(collaborator.phone)}</Cell>
        </DetailsWrapper>
      </Cell>

      {isDesktop && (
        <>
        <DesktopOnly as="td" data-label="Cargo">{collaborator.job}</DesktopOnly>
      <DesktopOnly as="td" data-label="Data de Admissão">{formatDate(collaborator.admission_date)}</DesktopOnly>
      <DesktopOnly as="td" data-label="Telefone">{formatPhone(collaborator.phone)}</DesktopOnly>
      </>
      )}
    </Row>
  );
};