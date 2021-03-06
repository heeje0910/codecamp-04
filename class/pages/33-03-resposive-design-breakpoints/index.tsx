import styled from "@emotion/styled"
import { red } from "@material-ui/core/colors";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper= styled.div`
    width: 1000px;
    height: 1000px;
    background-color: red;

    @media ${breakPoints.tablet} {
        width: 500px;
        height: 500px;
        background-color: green;
    }

    @media ${breakPoints.mobile}{
        width: 100px;
        height: 100px;
        background-color: blue;
        /* display: none;/ */
    }
`;


export default function ResponsiveDesignPage(){

    return(
        <>
            <Wrapper>상자</Wrapper>
        </>
    )
}

