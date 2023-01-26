import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import logoImage from '../../assets/5755231642_085d13db65_c.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Sun Prairie software helper</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={logoImage} alt='Sathish Logo!' />
      </div>
    </Fragment>
  );
};

export default Header;
