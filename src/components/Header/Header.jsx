import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {HOME, DOCS, TUTORIAL} from '../../routes/Router.routes';
import logo from '../../resources/images/webrix-logo-text-light.png';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import './Header.scss';

const Header = () => {
    const [active, setActive] = useState(false);
    const handleOnClick = useCallback(() => {
        setActive(!active);
    }, [setActive, active]);
    return (
        <header id='header'>
            <Link to={HOME.path} className='logo'>
                <img src={logo} alt='Webrix logo' loading='lazy'/>
            </Link>
            <div className={classNames('menu', {active})}>
                <Link to={DOCS.path}>{DOCS.name}</Link>
                <Link to={TUTORIAL.path}>{TUTORIAL.name}</Link>
                <Link to={TUTORIAL.path}>Playground</Link>
                <Link to={TUTORIAL.path}>Examples</Link>
            </div>
            <div className='version'>v1.0.0</div>
            <HamburgerMenu active={active} onClick={handleOnClick}/>
        </header>
    );
}

export default Header;