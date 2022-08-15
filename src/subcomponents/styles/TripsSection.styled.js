import styled from "styled-components";

export const FlexContainer = styled.div`
    width: 100%; 
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap; 
    

    @media only screen and (max-width: 599px) { 
        width: 100%;
        display: flex; 
        flex-direction: column;
        margin-bottom: 8%;
    }

`

export const FlexItem = styled.div`
width: 50%; 
padding: 1%;
@media only screen and (max-width: 599px) { 
        width: 100%;
        margin-bottom: 2%;
        
    }
`