import React from "react";
import css from './css/Sidebar.module.css';

function SideBar() {
    return <div className={css.sidebar}>
        <a href="#" target="blank">MyPhotos</a>
        <a href="#" target="blank">My Illustrations</a>
        <a href="#" target="blank">My Paintings</a>
    </div>
}

export default SideBar;