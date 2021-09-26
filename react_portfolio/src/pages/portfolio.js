import React from "react";
import { useQuery } from '@apollo/client'
import { pageMarginBottom, pageMarginTop } from "../components/utils/padding_margin/margin";
import { windowPaddingSides } from "../components/utils/padding_margin/padding";
import InfoBox from './../components/InfoBox/index'
import ProjectDisplay from "../components/InfoBox/projects";
import { Box, Heading, Text, Image, Flex } from "rebass";
import { background, primaryText } from "../components/utils/colors/lightTheme";
import BtnObj from './../components/ButtonStyled/index'
import { QUERY_FEATURES } from './../utils/queries';
import Footer from "../components/Footer/index";


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

function Portfolio () {
    const { loading, error, data } = useQuery(QUERY_FEATURES)
    if (loading) {
        console.log(loading)
        console.log(data)
        return <p>Loading...{loading}</p>;
    }
    if (error) {
        console.log(error)
        return <p>Error!</p>;
    } 
    //console.log(data.features);
    let features = data.features;
    //console.log(features[0])
    return (
        <div style={pageStyle}>

            <Footer />
        </div>
    )

}

export default Portfolio