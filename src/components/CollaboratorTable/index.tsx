import React from 'react';
import { ICollaborator } from '../../types/collaborator';
import { Table, TableHead, TableHeaderCell, TableWrapper } from './styles';
import { CollaboratorRow } from '../CollaboratorRow';

interface CollaboratorTableProps {
  collaborators: ICollaborator[];
}

export const CollaboratorTable: React.FC<CollaboratorTableProps> = ({ collaborators }) => {
  if (collaborators.length === 0) {
    return <p>Nenhum colaborador encontrado.</p>;
  }

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <tr>
            <TableHeaderCell>Foto</TableHeaderCell>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell hideOnMobile>Cargo</TableHeaderCell>
            <TableHeaderCell hideOnMobile>Data de Admissão</TableHeaderCell>
            <TableHeaderCell hideOnMobile>Telefone</TableHeaderCell>
          </tr>
        </TableHead>
        <tbody>
          {collaborators.map(collaborator => (
            <CollaboratorRow key={collaborator.id} collaborator={collaborator} />
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};