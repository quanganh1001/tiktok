import classNames from "classnames/bind";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({to,outline = false,small=false, large = false ,primary = false,text=false,disable=false,rounded=false,children,onClick,href,className,leftIcon,rightIcon, ...passProps}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    };

    // xóa sự kiện khi nút ẩn
    if(disable) {
        Object.keys(props).forEach(key  => {
            if (key.startsWith('on') && typeof props[key] === 'function') {delete props[key]}
        })
    }

    if (to) {
        props.to = to;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }


    const classes = cx ('wrapper',{
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        disable,
        rounded,

    });

    return (
        <Comp className = {classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
      );
}

export default Button;