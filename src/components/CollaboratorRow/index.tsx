import React, { useEffect, useState } from 'react';
import { ICollaborator } from '../../types/collaborator';
import { formatDate, formatPhone } from '../../utils/formatters';
import { Row, Cell, Avatar, MobileOnly, DesktopOnly, DetailsWrapper, NameHeader } from './styles';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import fallbackAvatar from '../../assets/user.png'; 
import { Icon } from '../Icons';

interface ChevronIconProps {
  isExpanded: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ isExpanded }) => {
  return isExpanded ? (
    <Icon name="chevronDown" />
  ) : (
    <Icon name="chevronUp" />
  );
};


interface CollaboratorRowProps {
  collaborator: ICollaborator;
}

export const CollaboratorRow: React.FC<CollaboratorRowProps> = ({ collaborator }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [imgSrc, setImgSrc] = useState(collaborator.image);

  const handleImageError = () => {
    setImgSrc(fallbackAvatar);
  };
  
  useEffect(() => {
    setImgSrc(collaborator.image);
  }, [collaborator.image]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

const isDesktop = useMediaQuery('(min-width: 769px)');

 return (
    <Row onClick={handleToggleExpand} isExpanded={isExpanded}>
      <Cell>
        <Avatar 
          src={imgSrc} 
          onError={handleImageError} 
          alt={collaborator.name} 
        />      
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