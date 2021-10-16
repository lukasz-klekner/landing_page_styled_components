import styled from 'styled-components'

const Card = ({ item: { id, title, image, body } }) => (
  <S.Card layout={id % 2 === 0 && 'row-reverse'}>
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>

    <div>
      <img src={`./images/${image}`} alt='' />
    </div>
  </S.Card>
)

const S = {
  Card: styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};
    img {
      width: 80%;
    }
    & > div {
      flex: 1;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }
  `,
}

export default Card
