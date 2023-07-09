import * as React from 'react';
import { Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleMode } from 'stores/reducer';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ModeSwitch() {

    const dispatch = useDispatch();

    const handleToggle = () => {
        console.log('Click')
        dispatch(toggleMode());
    };

    return <>
        <Switch {...label} onClick={handleToggle} defaultChecked />
    </>
}

