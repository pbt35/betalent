import { ICollaborator } from '../types/collaborator';

const API_URL = 'http://localhost:3000/employees';

export const getCollaborators = async (): Promise<ICollaborator[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ICollaborator[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch collaborators:", error);
    throw error;
  }
};