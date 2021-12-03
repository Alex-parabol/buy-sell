import styled from "@emotion/styled";

export const Form = styled.form`
   max-width: 600px;
   width: 95%;
   margin: 5rem auto 0 auto;
`

export const Field = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-family: 'nunito';

    label {
        flex: 0 0 150px;
        font-size: 1.5rem;
    }

    input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid var(--gris3);
        border-radius: 5px;
    }
`

export const InputSubmit = styled.input`
  background-color: var(--naranja);
  width: 50%;
  padding: 1rem;
  margin-left: 25%;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  font-family:'Nunito' ;
  font-weight: 700;
  

  &:hover {
      cursor: pointer;
      opacity: 80%;
  }
`

export const Error = styled.p`
    background-color: #ff0000c1;
    padding: 0.5rem;
    font-family: 'Nurito';
    font-weight: 700;
    color: #fff;
    text-align:center;
    text-transform: uppercase;
    margin: 2rem 0;
`