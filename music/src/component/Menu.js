import React, { useEffect } from 'react'

const Menu = ({ title, menuObject }) => {

    useEffect(() => {
        function changeMenuActive (){
            allLi.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        }
        const allLi = document.querySelector(".MenuContainer ul").querySelectorAll('li');
        allLi.forEach(n => n.addEventListener('click', changeMenuActive));
    }, []);
    return (
        <div className='MenuContainer'>
            <p className='title'>{title}</p>
            <ul>
                {
                    menuObject && menuObject.map((menu) => (
                        <li>{""}<a href="#"> <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a></li>

                    ))
                }
            </ul>
        </div>
    )
}

export { Menu }
