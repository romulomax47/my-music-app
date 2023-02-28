import styled from "styled-components";


export const Componetes = styled.section`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 1rem;
   padding: 30px;
   gap: 20px;
 
`

export const Compontes_div = styled.div`

   display: flex;
   gap: 0.3rem;
   width: 100%;
   margin: 0 auto;
   background-color: #fff;

   -webkit-box-shadow: 0px 0px 16px -4px #000000; 
   box-shadow: 0px 0px 16px -4px #000000;

   border-radius: 0.3rem;
   padding: 1rem;
   .data {
      width: 100%;
      
   }
   .data_img{
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      img{
         width: 100%;
      }
   }

`