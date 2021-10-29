import React from 'react';
import { useHistory } from 'react-router';
import styles from './user_info.module.css';

const UserInfo = (props) => {
    const history = useHistory();
    
    const goToMyProduct = () => {
        history.push({
            pathname: "/myproduct"
        })
    }

    return (
        <>
            <div className={styles.pop_profile}>
                <div className={styles.profile_left}>
                    <button className={styles.profileImg}><i className="fas fa-user-circle"></i></button>
                </div>
                <div className={styles.profile_right}>
                    <span className={styles.nickName}>닉네임</span>
                    <button className={styles.move_profile_page}><span>내 프로필 수정 </span></button>
                </div>
            </div>
            <div onClick={goToMyProduct} className={styles.pop_profilemenu}>
                <div className={styles.profilemenu_left}>
                    <button className={styles.profilemenuImg}><i className="fas fa-archive"></i></button>
                </div>
                <div className={styles.profilemenu_right}>
                    <span className={styles.myProduct}>내 상품</span>                        
                </div>
            </div>
            <div className={styles.pop_profilemenu}>
                <div className={styles.profilemenu_left}>
                    <button className={styles.profilemenuImg}><i className="fas fa-comments"></i></button>
                </div>
                <div className={styles.profilemenu_right}>
                    <span className={styles.myProduct}>채팅</span>                        
                </div>
            </div>
        </>
    )
};

export default UserInfo;