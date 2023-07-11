import classNames  from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://avatars.githubusercontent.com/u/20301207?v=4" 
                alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle} />
                </h4>
                <p className={cx('username')}>nguyenvana</p>
            </div>

        </div>
     );
}

export default AccountItem;