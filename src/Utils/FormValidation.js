export const LhFormValodation = (name, value) => {
    if (name === 'fullName') {
        const re = /^[^ 0-9][A-Za-z ]+$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
            const error = 'Name is required';
            return error;
        }
        else if (value.length < 2) {
            const error = 'Name contain mininum of 2 characters, maximum of 20 characters';
            return error;
        }
        else if (re.test(String(value).toLowerCase()) === false) {
            const error = ' Name should be alphabet';
            return error;
        }
        const error = '';
        return error;
    }
    
    else if (name === 'email') {
        const re = /^[a-zA-Z0-9._+-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (value.length === 0) {
            const error = 'Email is required';
            return error;
        }
        else if (value !== '') {
            if (re.test(String(value).toLowerCase()) === false) {
                const error = 'email is not valid';
                return error;
            }
        }
        const error = '';
        return error;
    }
    
    else if (name === 'mobileNumber') {
        const re = /^[0-9]*$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
            const error = 'Number is required';
            return error;
        }
        else if (re.test(String(value).toLowerCase()) === false) {
            const error = 'Mobile no should be numeric';
            return error;
        }
        else if (value.length !== 10) {
            const error = 'Mobile no Should be of 10 digit';
            return error;
        }
        const error = '';
        return error;
    }
    
    else if (name === 'subject') {
        if (value.length === 0) {
            const error = 'Subject is required';
            return error;
        }
        const error = '';
        return error;
    }
    
    else if (name === 'message') {
        if (value.length === 0) {
            const error = 'Message is required';
            return error;
        }
        const error = '';
        return error;
    }
    
    else if (name === 'pin') {
        const re = /^[0-9]*$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
            const error = 'Pin is required';
            return error;
        }
        else if (re.test(String(value).toLowerCase()) === false) {
            const error = 'Pin no should be numeric';
            return error;
        }
        const error = '';
        return error;
    }
    else if (name === 'signUpMobile') {
        const re = /^[0-9]*$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
            const error = 'Number is required';
            return error;
        }
        else if (re.test(String(value).toLowerCase()) === false) {
            const error = 'Mobile no should be numeric';
            return error;
        }
        else if (value.length !== 10) {
            const error = 'Mobile no Should be of 10 digit';
            return error;
        }
        const error = '';
        return error;
    }
    else if (name === 'age') {
        const re = /^[0-9]*$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
            const error = 'Age is required';
            return error;
        } 
        else if (re.test(String(value).toLowerCase()) === false) {
            const error = 'Age should be numeric';
            return error;
        }
    }
    else  if (name === 'state') {
        const re = /^[A-Za-z ]+$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
        const error = 'State is required';
        return error;
        }
        else if (value.length < 2 || value.length > 30) {
            const error ='must contain mininum of 2 characters, maximum of 30 characters';
            return error;
        }
        const error = '';
        return error;
    }
    else  if (name === 'city') {
        const re = /^[A-Za-z ]+$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
        const error = 'City is required';
        return error;
        }
        else if (value.length < 2 || value.length > 30) {
            const error ='must contain mininum of 2 characters, maximum of 30 characters';
            return error;
        }
        const error = '';
        return error;
    }
    else if (name === 'zipcode') {
        const re = /^[0-9]*$/;
        if (value.length === 0) {
          const error = 'Zip Code is required';
          return error;
        } else if (value.length !== 6) {
          const error = 'Must contain 6 digit';
          return error;
        } else if (re.test(String(value).toLowerCase()) === false) {
          const error = 'Must be a Number';
          return error;
        }
        const error = '';
        return error;
    }
    else if (name === 'occupation') {
        if (value.length === 0) {
          const error = 'Occupation is required';
          return error;
        }
        const error = '';
        return error;
    }
    else if (name === 'contactNumber') {
        const re = /^[0-9]*$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
          const error = 'Number is required';
          return error;
        }
        else if (re.test(String(value).toLowerCase()) === false) {
          const error = 'Contact Number no should be numeric';
          return error;
        }
        else if (value.length !== 10) {
          const error = 'Contact Number Should be of 10 digit';
          return error;
        }
        const error = '';
        return error;
    }
    else if (name === 'alternateNumber') {
        const re = /^[0-9]*$/;
        re.test(String(value).toLowerCase());
        if (value.length === 0) {
          const error = 'Number is required';
          return error;
        }
        else if (re.test(String(value).toLowerCase()) === false) {
          const error = 'Alternate Number should be numeric';
          return error;
        }
        else if (value.length !== 10) {
          const error = 'Alternate Number Should be of 10 digit';
          return error;
        }
        const error = '';
        return error;
    }
};
