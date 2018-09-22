import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NotificationIcon} from '../../utils/svgIcons';
import NotificationCardsSmall from './NotificationCards';


export const NotificationDropDowns = ({ handleOpen }) => (
	<Fragment>
		<NotificationIcon onClick={handleOpen} />
		<NotificationBox>
			<MarkAsRead> {'Mark all as Read'} </MarkAsRead>
			<NotificationCardsSmall />
			<SeeAll> {'See all'} </SeeAll>
		</NotificationBox>
	</Fragment>
);

// const NotificationBell = bellWithNotifications(notificationIcon, NotificationApi)

const NotificationBox = styled.div`
    background-color: ligthgreen;
    min-height: 300px;
    width: 240px;
`;

const MarkAsRead = styled.span`
    color: #8573f7;
    font-size: 11px;
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
