import * as React from "react";
import styled from "styled-components";
import PostPopup from "./PostPopup";

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
  const [imageId, setImageId] = React.useState(0);
  const [open, toggle] = React.useState(false);

  const clickedImage = images.find(({ id }) => id === imageId);
  const shuffledImages = images.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  return (
    <>
      <StyledPostsGallery>
        <StyledImagesContainer>
          {shuffledImages.map(img => (
            <StyledImageContainer>
              <StyledImage
                src={img.img}
                key={img.id}
                alt=""
                onClick={() => { 
                  setImageId(img.id);
                  toggle(true); 
                }}
              />
            </StyledImageContainer>
          ))}
        </StyledImagesContainer>
      </StyledPostsGallery>
      <PostPopup image={clickedImage} open={open} toggle={toggle}/>
    </>
  );
};

export default PostsGallery;
