import React from "react";
import { Flex, Box, Image } from 'rebass';
import { background, primary } from "../utils/colors/lightTheme";
import { github, linkedin, instagram } from './../utils/icons/socials'
import { windowPaddingSides } from "../utils/padding_margin/padding";

const style = {
    height: '64px',
    paddingLeft: windowPaddingSides,
    paddingRight: windowPaddingSides,
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    alignItems: 'center'
}

const boxBaseStyle = {
    color: 'black'
}

const leftBox = {
    ...boxBaseStyle,
    color: background
}

const centerBox = {
    ...boxBaseStyle,
    fontSize: '1.25rem'
}

const logoText = {
    color: primary,
    fontSize: '1.5rem'
}

const logoGroup = {
    justifyContent: 'flex-end'
}

function NavBar (props) {
    return(
        <Flex style={style}>
            <Box width={1/3} style={boxBaseStyle}>
                <span style={logoText}>Ethan Harsh</span>
            </Box>
            <Box width={1/3} style={centerBox}>
                <Flex>
                    <Box width={1/4}>About Me</Box>
                    <Box width={1/4}>Portfolio</Box>
                    <Box width={1/4}>Contact</Box>
                    <Box width={1/4}>Resume</Box>
                </Flex>
            </Box>
            <Box width={1/3} style={boxBaseStyle}>
                    <Flex style={logoGroup}>
                        <Box width={1/6}><Image src={github}></Image></Box>
                        <Box width={1/6}><Image src={linkedin}></Image></Box>
                        <Box width={1/6}><Image src={instagram}></Image></Box>
                    </Flex>
            </Box>
        </Flex>
    )
}

export default NavBar