import React from "react";

export const TextInput = ({ type, mainClass, className, value, name, maxlength, onChange, label, error, blur, focus, placeholder }) => {
    return (
        <div className={mainClass}>
            <label className="control-label">{label}</label>
            <div className="controls">
                <input type={type} className={className} value={value} name={name} onChange={onChange} onBlur={blur} onFocus={focus} maxLength={maxlength} />
            </div>
            <p className="error-message">{error}</p>
        </div>
    );
  };
