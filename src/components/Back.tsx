import { IoChevronBackOutline} from "react-icons/io5"
import styled from "styled-components"

const StyledBack = styled.button`
        color: var(--colors-ui-apple);
        border: none;
        background-color: var(--colors-bg);
        font-size: var(--fs-ml);
        display: flex;
        cursor: pointer;
        user-select: none;

`

export const Back = () => {

        return (
                <StyledBack>
                        <IoChevronBackOutline />
                        <span>Назад</span>
                </StyledBack>
        )
}