import React, { useEffect, useState } from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './BlogStyles';
import { pricingData } from '../../data/PricingData';
import axios from 'axios';

const  Blogs = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        let url = `https://wordpress-851255-2936489.cloudwaysapps.com/wp-json/wp/v2/posts`;
        axios.get(url).then((res)=>{
            setPosts(res.data);
        });
    }, []);
    console.log('posts', posts);

	return (
     <>
        {
         posts && posts.map(post => { return (<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<div key={post.id}>
            <PricingSection id="pricing">
				<PricingWrapper>
					<Heading>Featured Blog and More...</Heading>
					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{post.title.rendered}</PricingCardPlan>
									<PricingCardCost>{post.author}</PricingCardCost>
									<PricingCardText><p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p></PricingCardText>
									<PricingCardFeatures>
										{/* {card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))} */}
									</PricingCardFeatures>
									<Button>Read More...</Button>
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection> 
            </div>
		</IconContext.Provider>)}
        )}
        </>
		
	);
}
export default Blogs;
