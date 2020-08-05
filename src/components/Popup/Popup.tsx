import * as React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const S = {
  Modal: styled.div`
    position: fixed;
    z-index: 9999;
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
      height: 2.5rem;
      width: 2.5rem;
    }
    padding: 1rem 0.5rem;
    cursor: pointer;
  `,
  ModalContent: styled.div`
    position: absolute;
  `
};

export interface PopupProps {
  open: boolean;
  toggle(open: boolean): void;
  children: React.ReactNode;
}

const Popup: React.SFC<PopupProps> = ({ open = false, children, toggle }) => {
  return (
    <>
      {open && (
        <S.Modal>
          <S.CloseOutlined onClick={() => toggle(false)} />
          <S.ModalContent>
            {children}
          </S.ModalContent>
        </S.Modal>
      )}
    </>
  );
};

export default Popup;
