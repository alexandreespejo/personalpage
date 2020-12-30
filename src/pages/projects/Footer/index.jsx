import { Container } from './style';
import Button from '../../../components/Button';
const Footer = ({ contentList, active, set }) => {
  return (
    <Container>
      {contentList.map((content, index) => {
        return (
          <Button
            key={index}
            colorHover={false}
            active={true}
            background={
              active !== index
                ? ' rgba(51, 49, 56, 0.87)'
                : 'rgba(83, 230, 228, 0.76)'
            }
            // opacity={active === index ? 0.8 : 1}
            radius={'50%'}
            width={active === index ? '40px' : '30px'}
            height={active === index ? '40px' : '30px'}
            marginRight={'10px'}
            onClick={() => {
              set(index);
            }}
          >
            {index + 1}
          </Button>
        );
      })}
    </Container>
  );
};
export default Footer;