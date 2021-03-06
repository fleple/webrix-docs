import React, {useCallback, useState} from 'react';
import {useDebounce} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [raw, setRaw] =  useState(0);
    const [debounced, setDebounced] =  useState(0);
    const handler = useDebounce(useCallback(() => {
        setDebounced(t => t + 1);
    }, [setDebounced]), 500);
    const handleOnMouseMove = useCallback(() => {
        setRaw(r => r + 1);
        handler();
    }, [setRaw, handler]);
    return (
        <div>
            <div className='trigger' onMouseMove={handleOnMouseMove}>Trigger Area</div>
            <p>Raw Events: {raw}</p>
            <p>Debounced Events: {debounced}</p>
        </div>
    );
};
