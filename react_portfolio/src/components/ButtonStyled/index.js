import React from 'react';
import { Button } from 'rebass';
import { primaryBtn, secondaryBtn, primaryBtnBorder, secondaryBtnBorder, primaryBtnText, secondaryBtnText } from '../utils/colors/buttons'

const baseStyle = {
    borderRadius: '100px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '25px',
    paddingLeft: '25px'
}

const primaryStyle = {
    ...baseStyle,
    background: primaryBtn,
    border: primaryBtnBorder,
    color: primaryBtnText
}

const secondaryStyle = {
    ...baseStyle,
    background: secondaryBtn,
    border: secondaryBtnBorder,
    color: secondaryBtnText
}

function ButtonPrimary (props) {
    return (
        <Button style={primaryStyle}>{props.text}</Button>
    )
}

function ButtonSecondary (props) {
    return (
        <Button style={secondaryStyle}>{props.text}</Button>
    )
}

const btnObj = {
    ButtonPrimary,
    ButtonSecondary
}

export default btnObj