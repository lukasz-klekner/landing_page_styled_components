import styled from 'styled-components'

const SG = {
  Container: styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  `,
  Flex: styled.div`
    display: flex;
    align-items: center;
    & > div,
    & > ul {
      flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      text-align: center;
    }
  `,
}

export default SG
