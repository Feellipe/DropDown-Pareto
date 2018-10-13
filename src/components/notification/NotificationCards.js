import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



export const NotificationCardsSmall = ({notification}) => (
	<Card>
		<UnreadBar />
		<CloseButton />
		<UserImage />
		<NotificationMessage> { notification.content} </NotificationMessage>
	</Card>
);

const Card = styled.div`
    position: relative;
    background-color: #fff;
    border: 0.5px lightgrey solid;
    border-radius: 7px
    margin: 10px 15px 0 ;  
    width: 210px;
    height: 65px;
    
`;

const CloseButton = styled.div`
    position: absolute;
    background-color: grey;
    height: 9px;
    width: 9px;
    border-radius: 50%;
    right: 5px;
    top:5px;
`;
const NotificationMessage = styled.div`
    position: absolute;
    color: #261f41;
    font-size: 12px;
    width:150px;
    top: 55%
    left: 60%;
    transform: translate(-50%, -50%);
`;

const UnreadBar = styled.div`
    background-color: #35C2A4;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    width: 20px;  
`;

const UserImage = styled.div`
    position: absolute;
    top: 21%;
    left 5px;
    background-color: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;