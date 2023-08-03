import React, { useState } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import heroData from './heroData.json'
import { importAllImages } from './imageLoader';
import FilterButtons from './components/FilterButtons'
import AttributeButton from './components/AttributeButton';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;
const FilterGrid = styled.div`
display: grid;
width: 500px;
grid-template-columns: repeat(5, 1fr);
align-items: center;
justify-content: center;
gap: 10px;

@media (max-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
}
`

const HeroGrid = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid black; 
 padding: 25px;

 @media (max-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
  width: 90%;
}
 
  
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
   const [attributeFilter, setAttributeFilter] = useState(null);
   const images = importAllImages(require.context('./Assets', false, /\.(png|jpe?g|svg)$/));

   const handleSearchChange = (event) => {
     setSearchTerm(event.target.value);
   };

   const handleFilterClick = (filter) => {
    setActiveFilter(filter);
   }
   const handleAttributeClick = (filter) => {
    setAttributeFilter(filter);
   }

  return (
    <MainContainer>
      
       <SearchInput value={searchTerm} onChange={handleSearchChange} />
       <div>Attribute</div>
       <FilterGrid>
       <AttributeButton name={'All'} attribute={null}
        handleAttributeClick={handleAttributeClick} 
        setAttributeFilter={setAttributeFilter} 
        attributeFilter={attributeFilter}/> 

        <AttributeButton name={'Strength'} attribute={"Strength"}
        handleAttributeClick={handleAttributeClick} 
        setAttributeFilter={setAttributeFilter} 
        attributeFilter={attributeFilter}/> 

        <AttributeButton name={'Agility'} attribute={"Agility"}
        handleAttributeClick={handleAttributeClick} 
        setAttributeFilter={setAttributeFilter} 
        attributeFilter={attributeFilter}/>  

        <AttributeButton name={'Int'} attribute={"Intelligence"}
        handleAttributeClick={handleAttributeClick} 
        setAttributeFilter={setAttributeFilter} 
        attributeFilter={attributeFilter}/> 

        <AttributeButton name={'Univsersal'} attribute={"Universal"}
        handleAttributeClick={handleAttributeClick} 
        setAttributeFilter={setAttributeFilter} 
        attributeFilter={attributeFilter}/> 
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

        <FilterButtons name={'Disabler'} tag={'Disabler'}
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
            attributeFilter={attributeFilter}
            image={images[heroData.image]}
          />
        ))}
      </HeroGrid>
    </MainContainer>
  );
}

export default App;