import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import heroData from './heroData.json'
import { importAllImages } from './imageLoader';
import FilterButtons from './components/FilterButtons'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;
const FilterGrid = styled.div`
display: grid;
width: 500px;
grid-template-columns: repeat(5, 1fr);
align-items: center;
justify-content: center;
gap: 10px;
`

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
   const images = importAllImages(require.context('./Assets', false, /\.(png|jpe?g|svg)$/));

   const handleSearchChange = (event) => {
     setSearchTerm(event.target.value);
   };

   const handleFilterClick = (filter) => {
    setActiveFilter(filter);
   }

  return (
    <MainContainer>
      
       <SearchInput value={searchTerm} onChange={handleSearchChange} />
       <div>Attribute</div>
       <FilterGrid>
       <FilterButtons name={'All'} tag={null}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/> 

        <FilterButtons name={'Strength'} attribute={"strength"}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/> 

<FilterButtons name={'Agility'} attribute={"agility"}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/> 

<FilterButtons name={'Int'} attribute={"intelligence"}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/> 
         <FilterButtons name={'Universal'} attribute={"universal"}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/> 
        </FilterGrid>
       
       <div>Role</div>
       <FilterGrid>
        
       <FilterButtons name={'All'} tag={null}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>
       
       <FilterButtons name={'Carry'} tag={'Carry'}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>
        
        <FilterButtons name={'Support'} tag={'Support'}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>
        
        <FilterButtons name={'Tank'} tag={'Tank'}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>
      
      <FilterButtons name={'Nuker'} tag={'Nuker'}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>

        <FilterButtons name={'Healer'} tag={'Healer'}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>

        <FilterButtons name={'Control'} tag={'Control'}
        handleFilterClick={handleFilterClick} 
        setActiveFilter={setActiveFilter} 
        activeFilter={activeFilter}/>
      </FilterGrid>


      <HeroGrid>
        {heroData.map((heroData) => (
          <Hero
            key={heroData.name}
            name={heroData.name}
            attribute={heroData.attribute}
            tags={heroData.tags}
            searchTerm={searchTerm}
            activeFilter={activeFilter}
            image={images[heroData.image]}
          />
        ))}
      </HeroGrid>
    </MainContainer>
  );
}

export default App;
