import React from "react";
import { pageMarginBottom, pageMarginTop } from "../components/utils/padding_margin/margin";
import { windowPaddingSides } from "../components/utils/padding_margin/padding";
import InfoBox from './../components/InfoBox/index'
import { Box, Heading, Text, Image, Flex } from "rebass";
import { background, primaryText } from "../components/utils/colors/lightTheme";
import Footer from "../components/Footer/index";


const pageStyle = {
    marginLeft: windowPaddingSides,
    marginRight: windowPaddingSides,
    marginTop: pageMarginTop,
    marginBottom: pageMarginBottom,
    height: '100%',
}




function About () {
    return (
        <div style={pageStyle}>
            <Heading>
                <h1>About Me</h1>
            </Heading>
            <Text>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.

Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.

Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.

Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.

Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.

Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</Text>
            <Footer />
        </div>
    )

}

export default About