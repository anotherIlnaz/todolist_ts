import styled from "styled-components";


const NotesBlock = styled.div`
        display: flex;
        width: 60%;
        background: #b5b5b5;
        margin: 0.5rem;
        padding: 1rem;
`


export const NotesListBlock = () => {

        return(
                <NotesBlock>
                        <h1> Notes List Block</h1>
                </NotesBlock>
        )
}