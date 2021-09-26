import React from "react";
import { Flex, Box, Image, Text } from 'rebass';
import { primary } from "../utils/colors/lightTheme";
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

const centerBox = {
    ...boxBaseStyle,
    fontSize: '1.15rem',
    textAlign: 'center'
}

const logoText = {
    color: primary,
    fontSize: '1.35rem'
}

const logoGroup = {
    justifyContent: 'flex-end'
}

function NavBar (props) {
    return(
        <Flex style={style}>
            <Box width={1/3} style={boxBaseStyle}>
                <Text fontWeight='bold' style={logoText}>Ethan Harsh</Text>
            </Box>
            <Box width={1/3} style={centerBox}>
                <Flex>
                    <Box width={1/4}><Text fontWeight='bold'>About</Text></Box>
                    <Box width={1/4}><Text fontWeight='bold'>Portfolio</Text></Box>
                    <Box width={1/4}><Text fontWeight='bold'>Contact</Text></Box>
                    <Box width={1/4}><Text fontWeight='bold'><a class="nav-link" href="/pdf/Ethan_Harsh_Resume.pdf" target="_blank">Resume</a></Text></Box>
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