import styled from 'styled-components'

import Button from './Button'
import SG from '../StyledComponents'

const Header = () => (
  <S.Header>
    <SG.Container>
      <S.Nav>
        <S.Logo src={'./images/logo.svg'} alt='' />
        <Button>Try It Free</Button>
      </S.Nav>

      <SG.Flex>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <Button bg='#ff0099' color='#fff'>
            Get Started For Free
          </Button>
        </div>

        <S.Image src={'./images/illustration-mockups.svg'} alt='' />
      </SG.Flex>
    </SG.Container>
  </S.Header>
)

const S = {
  Header: styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
  `,
  Image: styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin: 40px 0 30px;
    }
  `,
  Logo: styled.img`
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 40px;
    }
  `,
  Nav: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }
  `,
}

export default Header
