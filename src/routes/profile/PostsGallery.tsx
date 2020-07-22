import * as React from "react";
import styled from "styled-components";

const StyledPostsGallery = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledImagesContainer = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledImageContainer = styled.div`
  background-color: #000;
  margin: 0.8rem;
`;
const StyledImage = styled.img`
  height: 300px;
  width: 300px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
export interface PostsGalleryProps {
  images: any[];
}

const PostsGallery: React.SFC<PostsGalleryProps> = ({ images }) => {
  const shuffledImages = images.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  return (
    <StyledPostsGallery>
      <StyledImagesContainer>
        {shuffledImages.map((img, index) => (
          <StyledImageContainer>
            <StyledImage src={img} key={index} />
          </StyledImageContainer>
        ))}
      </StyledImagesContainer>
    </StyledPostsGallery>
  );
};

export default PostsGallery;
