import { Fragment } from 'react';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const Modal = (props) => {
    return (
        <Fragment>
            <Backdrop />
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        </Fragment>
    );
  };
  
  export default Modal;