import styled from "styled-components";

export const NavStyle=styled.header`

.header {
    grid-area:header;
    background:#00ffff;
}

.header .container{
    display:flex;
    padding: 30px 40px;
    justify-content:space-between;
    align-items:center;
}

.header .logo{
    font-size:2rem;
    font-weight:700;
    color:blue;
}
 .header ul .navLink{
    font-size:1rem;
    text-transform:uppercase;
    padding:10px 20px;
 }
 .header ul .navLink:hover{
    text-decoration:underline;
    color:red;
    font-weight:800;
    cursor:zoom;
 }

`