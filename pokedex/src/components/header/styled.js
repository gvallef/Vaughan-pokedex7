import styled from "styled-components";

export const Button = styled.button`
  outline: none !important;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
  border-image-outset: 2;
  border-width: 4px;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  color: #fff;
  background-color: #209cee;

  @media Screen and (max-width: 427px) {
    margin: 0px !important;
    padding: 0;
    font-size: 12px;
  }
`;

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px #dedede;
  padding: 0 35px;

  @media (min-width: 539px) {
    width: 100%;
  }
`;


