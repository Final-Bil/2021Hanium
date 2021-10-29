import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../../util/getCurrentUser';
import LoginOrSignup from '../login_or_signup/login_or_signup';
import UserInfo from '../user_info/user_info';
import styles from './header_pop.module.css';

const HeaderPop = ({toggleMenu}) => {

    //좌측 사이드 메뉴 토글
    const onMenutoggle=(e) => {
        if(e.target.className === styles.left_pop) {
            toggleMenu();
        };
    }

    useEffect(() => {
        console.log('header_pop is Mounted')
        if(getCurrentUser()) {
            console.log('로그인 되어있따')
        }
    })

    return (

        <div className={styles.left_pop} onClick={onMenutoggle}>
            <div className={styles.pop_menu}>
                    {/* 로그인 되었을 시 안나옴 */}
                    <LoginOrSignup />
                    {/* 로그인 되었을 시 나옴 */}
                    <UserInfo />
            </div>  
        </div>
    )
};

export default HeaderPop;

// className={styles.}