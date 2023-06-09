import React, {CSSProperties, FC, Fragment, ReactNode, useEffect, useState} from 'react';
import styles from './Drawer.module.css';

interface DrawerProps {
    open: boolean,
    attachment?: "left" | "right"
    children: Array<ReactNode> | ReactNode,
    PaperProps?: {
        style?: CSSProperties,
        width?: string | number,
    }
    onClose: () => any
}

const Drawer: FC<DrawerProps> = ({open, children, onClose, attachment = "left", PaperProps}) => {
    const animDuration = 1;
    const [classes, setClasses] = useState([styles.Drawer, (open ? styles.DrawerOpen : styles.DrawerClosed)]);
    useEffect(() => {
        open ? (
            setClasses(([styles.Drawer, styles.DrawerOpening])),
                setTimeout(() => setClasses([styles.Drawer, styles.DrawerOpen]), animDuration * 100)) : (
            setClasses(([styles.Drawer, styles.DrawerClosing])),
                setTimeout(() => setClasses([styles.Drawer, styles.DrawerClosed]), animDuration * 100)
        )
    }, [open]);
    return (
        <Fragment>
            <div className={classes.join(" ")} style={{
                ...attachment === "right" ? {
                    right: 0,
                    transformOrigin: "100% 50%"
                } : {
                    left: 0,
                    transformOrigin: "0% 50%"
                },
                width: open ? "20rem" : 0,
                background: "white",
                height: "100vh",
                ...(PaperProps?.style ?? {})
            }} data-testid="Drawer" tabIndex={1}>
                {children}
            </div>
            <div tabIndex={-1} onClick={onClose}
                 className={open ? styles.DrawerBackdropOpen : styles.DrawerBackdropClose}
            />
        </Fragment>
    );
}

export default Drawer;
