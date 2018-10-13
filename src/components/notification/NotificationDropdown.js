import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withToggleMenu from '../withToogleMenu';
import NotificationData from './mockNotifications';
import {NotificationCardsSmall} from './NotificationCards';
import posed from 'react-pose';


const NotificationDropDowns = ({ isVisible, changeVisibility }) => (
	<Wrapper className="teste">
		<IconWrapper
			onClick={changeVisibility}

		>
			<NotificationIcon
				width="24px"
				height="24px"
				backgroundColor="#8573f7" />
		</IconWrapper>
		<PosedWrapper
			isVisible={isVisible}
			pose={isVisible ? 'visible' : 'hidden'}
		>
			<NotificationBox 
				className="Notification-Box"
			>
				<MarkAsRead> {'Mark all as Read'} </MarkAsRead>
				<CardsWrapper>
					{console.log(NotificationData)}
					{NotificationData.map((notifcation) =>
						(<NotificationCardsSmall key={notifcation.id} notification={notifcation}/>))}

				</CardsWrapper>
				<SeeAllWrapper>	
					<HorizontalDivider />
					<SeeAll> {'See all'} </SeeAll>
				</SeeAllWrapper>
			</NotificationBox>
		</PosedWrapper>
	</Wrapper>
);

const PosedWrapper = posed.div({
	visible: {  opacity: 1, 
		transition: {
			duration: 200,
			ease: 'easeOut'
		}},
	hidden: { opacity: 0 }
});

const IconWrapper = styled.div`

`;

const CardsWrapper = styled.div`
	overflow: auto;
	height: 230px;

`;

const SeeAllWrapper = styled.div`
	position: absolute;
	width: 90%;
	bottom: 1px;
	left: 50%;
  	transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
`;

const HorizontalDivider = styled.hr` 
	border: 0; 
	height: 1px; 
	background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
	background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
	background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
	background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 

  
`;

const NotificationBox = styled.div` 
	background-color: #e5e5e5;
	border-radius: 6px;
	box-shadow: 3px 3px 5px 6px #ccc;
	margin-left: 50px;
    min-height: 310px;
	position: relative;
	width: 250px;
`;


const MarkAsRead = styled.span`
    color: #8573f7;
    font-size: 10px;
`;

const SeeAll = styled.span`
    color: #8573f7;
    font-size: 13px;
`;

NotificationDropDowns.defaultProps = {
	handleOpen: x => x,
};

NotificationDropDowns.propTypes = {
	handleOpen: PropTypes.func,
};
const NotificationIcon = ({width, height, backgroundColor}) => (
	<svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill={backgroundColor}/></svg>
);


export default withToggleMenu(NotificationDropDowns);