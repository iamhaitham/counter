const CustomButton = (props) => {
    return (
        <button onclick={ props.handleClick }>
            { props.buttonTitle }
        </button>
    );
};

export default CustomButton;