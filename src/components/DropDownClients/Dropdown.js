import React, { Component } from 'react';
import styled from 'styled-components';
import DropdownItens from './DropdownItems';


export const Dropdown = (props) => {
    
	const dropItems = props.company.map((company) => {
		return (
			<DropDownWrapper>
				<DropdownItens />
			</DropDownWrapper>
		);
	});
};

const DropDownWrapper = styled.div`
    
`;

