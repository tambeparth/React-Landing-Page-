// // Navbar.js

// import React from 'react';
// import './Navbar.css';
// import home_icon from '../../assets/home_icon.png';
// import e1_icon from '../../assets/e1_icon.png';
// import id_card from '../../assets/id_card.png';
// import support from '../../assets/support.png';

// const Navbar = () => {
//     return (
//         <div className='background-image'>
//             <div className='nav'>
//                 <div className="nav-logo">PG-Locker</div>
//                 <ul className='nav-menu'>
//                     <li>
//                         <img src={home_icon} alt="Home" />
//                         <span>Home</span>
//                     </li>
//                     <li>
//                         <img src={e1_icon} alt="Explore" />
//                         <span>Explore</span>
//                     </li>
//                     <li>
//                         <img src={id_card} alt="About" />
//                         <span>About</span>
//                     </li>
//                     <li>
//                         <img src={support} alt="Contact" />
//                         <span>Contact</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-logo">PG-Locker</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Login</li>
            </ul>

        </div>
    )
}

export default Navbar

