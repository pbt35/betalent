import { useState, useEffect, useMemo } from 'react';
import { ICollaborator } from '../types/collaborator';
import { getCollaborators } from '../api/collaboratorService';

export const useCollaborators = () => {
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCollaborators = async () => {
      try {
        setLoading(true);
        const data = await getCollaborators();
        setCollaborators(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchCollaborators();
  }, []); 

  const filteredCollaborators = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase().trim();

    if (!lowercasedSearchTerm) {
      return collaborators;
    }

    return collaborators.filter(collaborator =>
      collaborator.name.toLowerCase().includes(lowercasedSearchTerm) ||
      collaborator.job.toLowerCase().includes(lowercasedSearchTerm) ||
      collaborator.phone.includes(lowercasedSearchTerm)
    );
  }, [collaborators, searchTerm]); 

  return {
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filteredCollaborators,
  };
};