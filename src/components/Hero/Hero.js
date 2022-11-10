import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>B2B & B2C Growth</MainHeading>
				<MainHeading>Experts.</MainHeading>
				{/* <HeroText>
					We provide the best security systems for clients all over the world
				</HeroText> */}
				<ButtonWrapper>
					<Link to="signup">
						<Button>LET US HELP</Button>
					</Link>
					<HeroButton>BOOK A CALL</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
