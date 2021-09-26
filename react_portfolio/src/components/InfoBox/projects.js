import React from "react";
import { Box, Flex, Heading, Image, Text } from "rebass";
import InfoBox from './index'
import BtnObj from './../ButtonStyled/index'

const imgHolder = {
    width: '250px',
    height: '250px',
    overflow: 'hidden',
    borderRadius: '6px'
}

const title = {
    marginBottom: '2rem'
}

const desc = {
    marginBottom: '5rem'
}

const infoStyle = {
    height: '100%'
}



function ProjectDisplay (project) {
    console.log('projectdisplay')
    project = project.project
    console.log(project.name)
    return (
        <div>
            <InfoBox.FeatureBox>
                
                    <Flex>
                        <Box width={1/3}>
                            <div style={imgHolder}>
                                <Image
                                    src={project.heroimg}
                                />
                            </div>
                        </Box>
                        <Box width={2/3} style={infoStyle}>
                            <Heading style={title}>{project.name}</Heading>
                            <Text style={desc}>{project.description}</Text>
                            <BtnObj.ButtonPrimary text="View Project" className="projectBtnStyle"></BtnObj.ButtonPrimary>
                            <BtnObj.ButtonSecondary text="View GitHub"></BtnObj.ButtonSecondary>
                        </Box>
                    </Flex>
            </InfoBox.FeatureBox>
        </div>
    )
}

export default ProjectDisplay;