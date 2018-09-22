import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotificationData from './mockNotifications';

const NotificationList = NotificationData.notificationList;

export const NotificationCardsSmall = () => (
	<Card>
		<UnreadBar />
		<CloseButton />
		<UserImage />
		<NotificationMessage> {NotificationList.notification1.content} </NotificationMessage>
	</Card>
);

const Card = styled.div`
    position: relative;
    background-color: #fff;
    border: 1px lightgrey solid;
    border-radius: 7px
    margin: 0 10px 0 10px;  
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
const NotificationMessage = styled.span`
    color: #261f41;
    font-size: 13px;
`;

const UnreadBar = styled.div`
    background-color: #35C2A4;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    width: 20px;  
`;

const UserImage = styled.div`
    position: absolute;
    top: 25%;
    left 5px;
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;