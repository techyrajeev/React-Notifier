import React from 'react';

const SimpleButton = ({children, whenClicked, classNames, inputType, ...rest }) =>
    (
        <button
            onClick   = {whenClicked}
            className = {`${classNames}`}
            type      = {inputType ? inputType : "button"}
            {...rest}
        >
            {children}
        </button>
    );


SimpleButton.propTypes = {
    whenClicked : React.PropTypes.func,
    classNames  : React.PropTypes.string.isRequired
};

export default SimpleButton;

