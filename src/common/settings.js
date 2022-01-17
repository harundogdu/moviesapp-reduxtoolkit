export const Settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  dotsClass: "slick-dots",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={style} className={"icon " + className} onClick={onClick} />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <di style={style} className={"icon " + className} onClick={onClick} />
  );
}
