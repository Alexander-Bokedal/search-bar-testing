import styled, { css } from 'styled-components';
import { importAllImages } from '../imageLoader';

const HeroPortrait = styled.div`
  border: 1px solid black;
  height: 100px;
  padding: 10px;
  width: 150px;
  &:hover {
    background-color: #0056b3;
  }
  &:active {
    background-color: #0036b3;
  }
 
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
`;

const Image = styled.img`
  width: 100%; // Make sure the image takes the full width of the container
  height: 100%; // Make sure the image takes the full height of the container
  object-fit: cover; // Maintain the aspect ratio and cover the container
`;

function Hero(props) {
  const images = importAllImages(require.context('../Assets', false, /\.(png|jpe?g|svg)$/));
  const imageSrc = images[`${props.name.trim()}.png`];

 
  return (
    <HeroPortrait  
    searchTerm={props.searchTerm}
    name={props.name}
    attribute={props.attribute}
    activeFilter={props.activeFilter}
    tags={props.tags}
  >
     <Image src={imageSrc} alt={props.name} />
    </HeroPortrait>
  );
}

export default Hero;