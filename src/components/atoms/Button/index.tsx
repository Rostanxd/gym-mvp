
type ButtonProps = {
  text: string,
  handleOnClick: any,
}

const Button = (props: ButtonProps) => {

  const handleButtonClick = (event) => {
    event.preventDefault();
    props.handleOnClick();
  }

  return (
    <a
      href="#"
      className="w-24 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
      onClick={handleButtonClick}
    >
      {props.text}
    </a>
  );
}

export default Button;
