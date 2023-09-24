import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DeleteBtn = styled.button`
padding: 0.6em 2em;
border: none;
outline: none;
color: rgb(255, 255, 255);
background: green;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
margin-left: 50px;
`;
