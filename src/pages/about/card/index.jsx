import { Container, Name, Image, Desc } from '../../../styles/card';
import { AiOutlineAntDesign, ImQuestion } from 'react-icons/all';
const Card = () => {
  const picAddress =
    'https://avatars.githubusercontent.com/u/62163105?s=400&u=d5875569bd369dc587037eb7cc580836e2917e24&v=4';
  return (
    <Container>
      <Name>
        <AiOutlineAntDesign />
        <h2>Alexandre Espejo</h2>
      </Name>
      <Image>
        <img src={picAddress} alt="profile"></img>
      </Image>
      <Desc>
        <div>
          <ImQuestion />
          <h3>Sobre</h3>
        </div>
        <div>
          <p>
            Olá, sou o Alexandre Espejo um desenvolvedor do interior de SP que a
            pouco tempo está desbravando esse vasto universo da
            programação.Apaixonado por JavaScript, às tecnologias que mais gosto
            de estudar e trabalhar são Node.js, React.js e React Native, porem
            sempre estou aberto a me aventurar em novos desafios.
          </p>
        </div>
        <span>
          <label htmlFor="">Lv:01</label>
          <label htmlFor="">Exp:100</label>
          <AiOutlineAntDesign />
        </span>
      </Desc>
    </Container>
  );
};
export default Card;
