import React from 'react';
import { IconWrapper, Input, SearchContainer } from './styles';
import { Icon } from '../Icons';


interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Pesquisar"}
      />
      <IconWrapper>
        <Icon name="search" />
      </IconWrapper>
    </SearchContainer>
  );
};