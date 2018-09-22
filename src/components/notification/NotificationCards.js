import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const NotificationCardsSmall = () => (
    <Card>
        <UnreadBar />
        <CloseButton />
        <UserImage />
        <NotificationMessage> {'Default message'} </NotificationMessage>
    </Card>
);

const Card = styled.div`
    background-color: #fff;
    border: 1px lightgrey solid;
    border-radius: 7px
    margin: 0 10px 0 10px;  
    width: 200px;
    
`;

const CloseButton = styled.div`
    background-color: grey;
    height: 5px;
    width: 5px;
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

const UserImage = styled.img`
    background-color: black;
    width: 20px;
    border-radius: 50%;
`;