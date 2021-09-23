import React from "react";
import { pageMarginBottom, pageMarginTop } from "../components/utils/padding_margin/margin";
import { windowPaddingSides } from "../components/utils/padding_margin/padding";
import InfoBox from './../components/InfoBox/index'
import { Box, Heading, Text, Image, Flex } from "rebass";
import { background, primaryText } from "../components/utils/colors/lightTheme";
import BtnObj from './../components/ButtonStyled/index'

const pageStyle = {
    marginLeft: windowPaddingSides,
    marginRight: windowPaddingSides,
    marginTop: pageMarginTop,
    marginBottom: pageMarginBottom,
    height: '100%',
}

const whiteText = {
    color: background,
    marginBottom: '1.25rem'
}

const introText = {
    ...whiteText,
    marginBottom: '5rem'
}

const introTextPrimary = {
    color: primaryText,
    marginBottom: '2.5rem'
}

const bottomText = {
    ...whiteText,
    marginBottom: '2.5rem'
}

const avatarStyle = {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'start'
}

const featureStyle = {
    flexFlow: 'column wrap'
}

function HomePage() {
    return (
        <div style={pageStyle}>
            <InfoBox.BlueBox>
                <Flex>
                    <Box width={2/3}>
                        <Text style={ introText }>Introduction</Text>

                        <Heading style={ whiteText }>Hello, my name is Ethan. I like Mac & Cheese, Techno, and Coding</Heading>
                        <Text style={ bottomText }>I’m a full stack developer from Columbus, Ohio. I have certifications in JavaScript, Python, React, Poopybutt, Some Other Thing, and Boobybutt. </Text>
                        <BtnObj.ButtonSecondary text='View Projects'></BtnObj.ButtonSecondary>
                    </Box>
                    <Box width={1/3} style={avatarStyle}>
                        <Image src='avatar.jpeg' sx={{width: ['140px', '140px'], borderRadius: '10px'}}></Image>
                    </Box>
                </Flex>
            </InfoBox.BlueBox>
            <InfoBox.RedBox>
                <Flex>                
                    <Box width={2/3}>
                        <Text style={ introText }>Education</Text>
                        <Heading style={ whiteText }>The Ohio State University</Heading>
                        <Text style={ bottomText }>After playing college football for two years at John Carroll University, I transferred to The Ohio State University in 2014.  In 2017 I graduated with a bachelors degree in Political Science.  Now I am getting certified to be a Full Stack MERN developer at Ohio State.</Text>
                        <BtnObj.ButtonSecondary text='View Projects'></BtnObj.ButtonSecondary>
                    </Box>
                    <Box width={1/3} style={avatarStyle}>
                        <Image src='osu-seal-min.jpeg' sx={{width: ['140px', '140px'], borderRadius: '10px'}}></Image>
                    </Box>
                </Flex>
            </InfoBox.RedBox>
            <InfoBox.GreyBox>
                <Flex style={featureStyle}>                
                    <Text style={ introTextPrimary }>Featured Projects</Text>
                    <InfoBox.FeatureBox>

                    </InfoBox.FeatureBox>
                    <InfoBox.FeatureBox>

                    </InfoBox.FeatureBox>
                </Flex>
            </InfoBox.GreyBox>
        </div>
    )

}

export default HomePage