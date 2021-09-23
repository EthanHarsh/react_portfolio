import React from "react";
import { primaryBorderLight, primary, primaryBorder, secondaryBorderLight, secondary, secondaryBorder } from "../utils/colors/lightTheme";
import { Box } from 'rebass';


const baseStyle = {
    width: '100%',
    height: '450px',
    borderRadius: '20px'
}

const blueBoxStyle = {
    ...baseStyle,
    background: primary,
    border: primaryBorderLight
}

const blueBoxOutlineStyle = {
    ...baseStyle,
    border: primaryBorder
}

const redBoxStyle = {
    ...baseStyle,
    background: secondary,
    border: secondaryBorderLight
}

const redBoxOutlineStyle = {
    ...baseStyle,
    border: secondaryBorder

}

function RegBox() {
    return (
        <Box width={1/1} style={baseStyle}></Box>
    )
}

function BlueBox() {
    return (
       <Box width={1/1} style={blueBoxStyle}></Box>
    )
}

function BlueBoxOutline() {
    return (
       <Box width={1/1} style={blueBoxOutlineStyle}></Box>
    )
}

function RedBox() {
    return (
       <Box width={1/1} style={redBoxStyle}></Box>
    )
}

function RedBoxOutline() {
    return (
       <Box width={1/1} style={redBoxOutlineStyle}></Box>
    )
}

const InfoBox = {
    RegBox,
    BlueBox,
    BlueBoxOutline,
    RedBox,
    RedBoxOutline
}

export default InfoBox;