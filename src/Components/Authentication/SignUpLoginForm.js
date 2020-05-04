import React from "react";

export const TextInput = ({ type, className, value, name, maxlength, onChange, label, error, blur, focus }) => {
    return (
        <div className="auth-form-vertical">
            <div className="auth-form-group">
                <input type={type} className={className} value={value} name={name}
                onChange={onChange} maxLength={maxlength} onBlur={blur} onFocus={focus} />
                <span className='floating-label'>{label}</span>
                <p className="error-message">{error}</p>
            </div>
        </div>      
    );
};
