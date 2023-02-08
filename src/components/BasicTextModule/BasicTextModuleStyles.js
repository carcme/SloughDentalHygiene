import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  .container {
    @media (min-width: 768px) {
      > div {
        width: 80%;
        max-width: 1000px;
      }
    }

    h2 {
      margin-bottom: 50px;
    }
  }
`
