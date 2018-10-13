import React from 'react';
import PropTypes from 'prop-types';
import {
	compose, withState, withHandlers,
} from 'recompose';
import onClickOutside from 'react-onclickoutside';

const withToggleMenu = (WrappedComponent) => {
	const ComponentWithToggleMenu = ({
		isVisible, changeVisibility, changeMenuActiveItem,
		activeMenuItem, ...props
	}) => (
		<WrappedComponent
			activeMenuItem={activeMenuItem}
			changeMenuActiveItem={changeMenuActiveItem}
			changeVisibility={changeVisibility}
			isVisible={isVisible}
			{...props}
		/>
	);

	const enhance = compose(
		withState('isVisible', 'setVisibility', false),
		withState('activeMenuItem', 'setActiveMenuItem'),
		withHandlers({
			changeVisibility: props => () => {
				const { isVisible, setVisibility } = props;

				if (isVisible) setVisibility(false);
				else setVisibility(true);
			},
			changeMenuActiveItem: props => (menuItem) => {
				const { setActiveMenuItem, setVisibility } = props;
				setActiveMenuItem(menuItem);
				setVisibility(false);
			},
			handleClickOutside: props => () => {
				const { setVisibility } = props;
				setVisibility(false);
			},
		}),
		onClickOutside,
	);

	ComponentWithToggleMenu.propTypes = {
		changeVisibility: PropTypes.func.isRequired,
		isVisible: PropTypes.bool.isRequired,
		activeMenuItem: PropTypes.shape({}),
		changeMenuActiveItem: PropTypes.func.isRequired,
	};

	return enhance(ComponentWithToggleMenu);
};

export default withToggleMenu;