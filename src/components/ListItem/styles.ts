import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
  `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    justify-content: space-between;

    label{
      color: #CCC;

      text-decoration: ${done ? 'line-through': 'initial'};
    }

    input{
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }


    button{
      border: none;
      border-radius: 5px;
      height: 30px;

      cursor: pointer;

    }
`))