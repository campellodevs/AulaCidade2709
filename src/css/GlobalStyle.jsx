import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}

html{
    scroll-behavor:smooth;
}
body{
    display:grid
    grid-template-areas:
        'nav nav nav nav'
        'header header header header'
        'home home home home'
        'login login login login'
        
    grid-template-columns:repeae(3,1fr)

}
`


export default GlobalStyle