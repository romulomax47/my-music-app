
import './style.jsx';
import { Button,CardInput, Logo, Nav } from './style.jsx';

export default function Navbar() {

   return (
      <>
         <Nav>
            <CardInput>
               <input type="text" />
               <i className="bi bi-search"></i>
            </CardInput>

            <Logo>Breach News</Logo>


            <Button>Entrar</Button>
         </Nav>
      </>
   )
}