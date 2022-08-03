import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <h1 className="sidebar__logo-item">LOGO</h1>
            </div>
            <hr />
            <div className="sidebar__link-container">
                <ul className='sidebar__links'>
                    <li className='sidebar__link'>
                        <span>Dashboard 1</span>
                    </li>
                    <li className='sidebar__link'>
                        <span>Dashboard 2</span>
                    </li>
                    <li className='sidebar__link'>
                        <span>Dashboard 3</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__colors-options">Color</div>
        </div>
    )
}

export default Sidebar;