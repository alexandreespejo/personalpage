import { Stars, Star } from '../../../styles/starsRain';
const StarsRain = () => {
  const starClick = (component) => {
    component.target.offsetParent.style.opacity = 0.3;
    component.target.offsetParent.style.pointerEvents = 'none';

    setTimeout(() => {
      component.target.offsetParent.style.opacity = 1;
      component.target.offsetParent.style.pointerEvents = '';
    }, 800);
  };
  return (
    <Stars>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
      <Star>
        <span
          onClick={(e) => {
            starClick(e);
          }}
        ></span>
      </Star>
    </Stars>
  );
};
export default StarsRain;
