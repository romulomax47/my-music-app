import styled from 'styled-components'

export const Nav = styled.nav`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
   /* position: fixed; */
   /* top: 0; */
   background-color: white;
   z-index: 1;
   box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`

export const CardInput = styled.div`
   position: relative;
   width: 200px;
   display: flex;
   align-items: center;
   justify-content: center;

   gap: 0.5rem;

   i{
      position: absolute;
      top: 1;
      right: 0.2rem;
      z-index: 10;
      border: none;
      background-color: #f5f5f5;
      color:#757575;
      border-radius: 0.3rem;
      padding: 0.5rem;
   }
   
   input{
      outline: none;
      font-size: 1rem;
      padding: 0.6rem;
      background-color: #f5f5f5;
      border: none;
      width: 100%;
      border-radius: 0.3rem;

      :focus{
         border: 1px solid #0bade3;
      }

   }

`
export const Logo = styled.strong`
     width: 8rem;
`

export const Button = styled.button`
   background-color: #0bade3;
   border: none;
   outline: none;
   font-size: 1rem;
   padding: 0.4rem 1rem;
   color: #fff;

   transition: all 0.4s ease-in-out;
   cursor: pointer;

   border-radius: 0.3rem;
   /* font-family: ; */
   font-weight: 500;
   letter-spacing: 0.1rem;
   text-transform: uppercase;
`