import * as React from "react";
import styled from "styled-components";

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledImage = styled.img`
  height: 600px;
  width: 600px;
`;
const StyledPost = styled.div`
  background-color: white;
  width: 400px;
`;

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledModalContent = styled.div`
  position: absolute;
`;

export interface PostPopupProps {
  image: { id: number; img: any };
  open: boolean;
  toggle(open: boolean): void;
}

const PostPopup: React.SFC<PostPopupProps> = ({
  image = { id: 0, img: "" },
  open,
  toggle
}) => {
  return (
    <>
      {open && (
        <StyledModal>
          <StyledModalContent onClick={() => toggle(false)}>
            <StyledPostContainer>
              <StyledImage src={image.img} />
              <StyledPost />
            </StyledPostContainer>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
};

export default PostPopup;
