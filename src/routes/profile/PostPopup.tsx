import * as React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const S = {
  Modal: styled.div`
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
  `,
  CloseOutlined: styled(CloseOutlined)`
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    svg {
      height: 25px;
      width: 25px;
    }
    padding: 1rem 0.5rem;
    cursor: pointer;
  `,
  ModalContent: styled.div`
    position: absolute;
  `,
  PostContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Image: styled.img`
    height: 600px;
    width: 600px;
  `,
  Post: styled.div`
    background-color: white;
    width: 400px;
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
      {open && (
        <S.Modal>
          <S.CloseOutlined onClick={() => toggle(false)} />
          <S.ModalContent>
            <S.PostContainer>
              <S.Image src={image.img} alt="" />
              <S.Post />
            </S.PostContainer>
          </S.ModalContent>
        </S.Modal>
      )}
    </>
  );
};

export default PostPopup;
