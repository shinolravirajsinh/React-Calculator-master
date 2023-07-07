import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: black;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;

`;

export const Prevoius = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px solid black;
  background-color: rgba(211, 211, 211);
  
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `background-color:orange; color:white`};
  ${({ control }) => control && `background-color:orange;`};
  ${({ equals }) =>
    equals && `background-color:orange; color:white`};
  ${({ decimal }) =>
    decimal && `background-color:rgba(211, 211, 211);`};
`;