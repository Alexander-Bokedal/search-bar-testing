import styled, { css } from 'styled-components';

const HeroPortrait = styled.div`
  border: 1px solid black;
  height: 200px;
  padding: 10px;
  

  ${(props) =>
    (props.searchTerm &&
      css`
        opacity: ${props.name.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        props.attribute.toLowerCase().includes(props.searchTerm.toLowerCase())
          ? 1
          : 0.3};
      `) ||
    (props.activeFilter &&
      props.tags &&
      !props.tags.includes(props.activeFilter) &&
      css`
        opacity: 0.3;
      `)}
}

&:hover {
  background-color: #0056b3;
}
`;

function Hero(props) {
  return (
    <HeroPortrait
      searchTerm={props.searchTerm}
      name={props.name}
      attribute={props.attribute}
      activeFilter={props.activeFilter}
      tags={props.tags}
    >
      <h2>Hero: {props.name}</h2>
      <h2>Attribute: {props.attribute}</h2>
    </HeroPortrait>
  );
}

export default Hero;
