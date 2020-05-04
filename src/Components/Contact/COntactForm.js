import React from 'react';

export const TextInput = ({ type, className, value, name, maxlength, onChange, label, error, blur, focus }) => {
    return (
        <div className='contact-form-vertical'>
            <div className='contact-form-group'>
                <div className='contact-controls'>
                    <input type={type} className={className} value={value}
                    name={name} onChange={onChange} maxLength={maxlength} onBlur={blur} onFocus={focus} />
                    <span className={localStorage.getItem("token") ? 'unfocus-label unfocus' : 'floating-label'}>{label}</span>
                    <p className="error-message">{error}</p>
                </div>
            </div>
        </div>
    );
};
