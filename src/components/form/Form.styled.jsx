import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const NameFormLabel = styled.label`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`;

export const FormNameInput = styled.input`
  display: block;
  max-width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
`;
export const NumberFormLabel = styled.label`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
`;
export const FormNumberInput = styled.input`
  display: block;
  max-width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const FormSubmitBtn = styled.button`
padding: 0.6em 2em;
width: 150px;
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
`;
