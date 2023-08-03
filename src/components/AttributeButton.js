import styled from 'styled-components';

const FilterButtonStyled = styled.button`
  padding: 8px 16px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  background-color: ${(props) => (props.active ? '#007bff' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
 
`;

function AttributeButton (props) {
    const {attributeFilter, handleAttributeClick, attribute, name} = props;
    
    return(

<FilterButtonStyled
active={attributeFilter === attribute}
onClick={() => handleAttributeClick(attribute)} 
>
{name}
</FilterButtonStyled>

    )
}

export default AttributeButton;