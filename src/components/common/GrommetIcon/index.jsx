import React, { Component } from 'react';
import * as grommetIcons from 'grommet-icons';

export const GrommetIcon = (props) => {
    const IconName = grommetIcons[props.tag];    
    return (<div><IconName /></div>);
};