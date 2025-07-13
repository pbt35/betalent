import React from 'react';
import { SearchInput } from '../components/SearchInput';
import { useCollaborators } from '../hooks/useCollaborators';
import Header from '../components/Header';
import { PageContainer, DashboardActions, Title } from './styles';
import { CollaboratorTable } from '../components/CollaboratorTable';

export const Dashboard: React.FC = () => {
  const { loading, error, searchTerm, setSearchTerm, filteredCollaborators } = useCollaborators();

  return (
    <>
      <Header />
      <PageContainer>
          <DashboardActions>
            <Title>Funcionários</Title>
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Pesquisar"
            />
          </DashboardActions>

          <main>
            {loading && <p>Carregando...</p>}
            {error && <p>Ocorreu um erro ao buscar os dados: {error.message}</p>}
            {!loading && !error && (
              <CollaboratorTable collaborators={filteredCollaborators} />
            )}
          </main>
      </PageContainer>
    </>
  );
};