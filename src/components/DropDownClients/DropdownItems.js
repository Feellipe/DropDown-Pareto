import React, { Component } from 'react';
import styled from 'styled-components';


const DropdownItems = (props) => {
    const dropItems = props.companies.map((company) => {
        return(
        <div>
            <Image />
            <PresenationWrapper>
                <Title></Title>
                <Subtitle></Subtitle>
            </PresenationWrapper>

        </div>)
    });

    const Image = styled.img`

    `;
    const PresenationWrapper = styled.div`
        
    `;
    const Title = styled.div`
        
    `;
    const Subtitle = styled.div`
    `;

}
export default DropdownItems;