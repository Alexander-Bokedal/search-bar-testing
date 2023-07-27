import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

const HeroGrid = styled.div`
  width: 700px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  
   padding-left: 50px;
   padding-right: 30px;

  
`;

const SearchInput = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Search heroes...',
}))`
  /* Add your styling here */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  background-color: ${(props) => (props.active ? '#007bff' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
 
`;

function App() {
   const [searchTerm, setSearchTerm] = useState('');
   const [activeFilter, setActiveFilter] = useState(null);

   const handleSearchChange = (event) => {
     setSearchTerm(event.target.value);
   };

   const handleFilterClick = (filter) => {
    setActiveFilter(filter);
   }

  return (
    <MainContainer>
       <SearchInput value={searchTerm} onChange={handleSearchChange} />
       <div>
        <FilterButton
          active={activeFilter === null}
          onClick={() => handleFilterClick(null)}
        >
          All
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Carry'}
          onClick={() => handleFilterClick('Carry')}
        >
          Carry
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Support'}
          onClick={() => handleFilterClick('Support')}
        >
          Support
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Tank'}
          onClick={() => handleFilterClick('Tank')}
        >
          Tank
        </FilterButton>
        <FilterButton
          active={activeFilter === 'Nuker'}
          onClick={() => handleFilterClick('Nuker')}>
            Nuker
        </FilterButton>
      </div>

      <HeroGrid>
        <Hero name={'Morphling'} attribute={'agility'} tags={['Carry']} searchTerm={searchTerm} activeFilter={activeFilter}/>
        <Hero name={'Winter Wyvern'} attribute={'universal'} tags={['Support', 'Control']} searchTerm={searchTerm} activeFilter={activeFilter}/>
        <Hero name={'Dragon Knight'} attribute={'strength'} tags={['Tank']} searchTerm={searchTerm} activeFilter={activeFilter}/>
        <Hero name={'Rubick'} attribute={'intelligence'} tags={['Support', 'Nuker']} searchTerm={searchTerm} activeFilter={activeFilter}/>
      </HeroGrid>
    </MainContainer>
  );
}

export default App;
