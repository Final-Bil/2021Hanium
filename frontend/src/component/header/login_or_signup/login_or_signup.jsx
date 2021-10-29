import React from 'react';
import { useHistory } from 'react-router';
import styles from './login_or_signup.module.css';
const LoginOrSignup = (props) => {

    const history = useHistory();
    //로그인 화면으로 이동
    const goToLogin = () => {
        history.push({
            pathname: "/login"
        })
    }

    return (
        <div className={styles.beforeLogin}>
                <span className={styles.message}>서비스를 이용하시려면 로그인 해주세요.</span>
                <span className={styles.move_login_page} onClick={goToLogin}>로그인 또는 회원가입</span>
         </div>
    )
};

export default LoginOrSignup;