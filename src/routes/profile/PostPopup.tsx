import * as React from "react";
import styled from "styled-components";
import Popup from "components/Popup";

const S = {
  PostContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Image: styled.img`
    height: 60rem;
    width: 60rem;
  `,
  Post: styled.div`
    background-color: white;
    width: 40rem;
  `
};

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
      <Popup open={open} toggle={toggle}>
        <S.PostContainer>
          <S.Image src={image.img} alt="" />
          <S.Post />
        </S.PostContainer>
      </Popup>
    </>
  );
};

export default PostPopup;
