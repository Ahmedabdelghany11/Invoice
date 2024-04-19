import styled from "styled-components"
import { useTheme } from "../context/ThemeContext"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"

const StyledThemeBox = styled.div`
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: var(--main-transition);

    >svg {
        font-size: 3rem;
        transition: var(--main-transition);
        color: var(--third-color);
    }
`

function ThemeBtn() {
    const {isDark, toggleTheme} = useTheme();

  return (
    <StyledThemeBox onClick={toggleTheme}>
        {isDark ? <HiOutlineSun/> : <HiOutlineMoon />}
    </StyledThemeBox>
  )
}

export default ThemeBtn