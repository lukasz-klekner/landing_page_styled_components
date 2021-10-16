import styled from 'styled-components'

const Header = () => (
  <S.Header>
    <S.Container>
      <S.Nav>
        <S.Logo src={'./images/logo.svg'} alt='' />
        <S.Button>Try It Free</S.Button>
      </S.Nav>

      <S.Flex>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <S.Button bg='#ff0099' color='#fff'>
            Get Started For Free
          </S.Button>
        </div>

        <S.Image src={'./images/illustration-mockups.svg'} alt='' />
      </S.Flex>
    </S.Container>
  </S.Header>
)

const S = {
  Button: styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};
    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  `,
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
