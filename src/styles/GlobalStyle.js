import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`



*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;

  ::-webkit-scrollbar{
    width: 5px;
    background-color: #FFF8F5;
}
::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: #F63E7B;
}
::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #FFF8F5;
}
}


body{
  font-family: 'Poppins', sans-serif;

  input{
    padding:5px;
  }

  input:focus{
    outline: 2px solid #F63E7B;
    border-radius:3px;
    border:none;
    
  }


 
}




`;
