import { css } from '@emotion/react';

type ButtonProps = {
    children: string;
    theme: 'primary' | 'secondary' | 'tertiary';
    size: 'small' | 'medium' | 'big';
    disabled?: boolean;
    width?: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    custom?: any;
};

function Button({ children, theme, size, disabled, width, onClick, custom }: ButtonProps) {
    return (
        <button
            css={[
                initial,
                themes[theme],
                sizes[size],
                css`
                    width: ${width ? width : 'auto'};
                `,
                custom,
            ]}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    theme: 'primary',
    size: 'medium',
};

export default Button;

const initial = css`
    position: relative;
    outline: none;
    border: none;
    box-sizing: border-box;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

const themes = {
    primary: css`
        background: #20c997;
        color: white;
        &:hover:enabled {
            background: #38d9a9;
        }
        &:active:enabled {
            background: #12b886;
        }
        &:disabled {
            background: #aed9cc;
        }
    `,
    secondary: css`
        background: #e9ecef;
        color: #343a40;
        &:hover:enabled {
            background: #f1f3f5;
        }
        &:active:enabled {
            background: #dee2e6;
        }
        &:disabled {
            color: #c6d3e1;
        }
    `,
    tertiary: css`
        background: none;
        color: #20c997;
        &:hover:enabled {
            background: #e6fcf5;
        }
        &:active:enabled {
            background: #c3fae8;
        }
        &:disabled {
            color: #bcd9d0;
        }
    `,
};

const sizes = {
    small: css`
        height: 1.75rem;
        font-size: 0.75rem;
        padding: 0 0.875rem;
    `,
    medium: css`
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 1rem;
    `,
    big: css`
        height: 3rem;
        font-size: 1.125rem;
        padding: 0 1.5rem;
    `,
};
