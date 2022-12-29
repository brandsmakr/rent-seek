const isEmpty = (val, id) => {
  if (!val) {
    document.getElementById(id).style.borderColor = "red";
    return "Field is required";
  }
  document.getElementById(id).style.borderColor = "#ced4da";
  return "";
};

const maxLengthCheck = (val) => {
  if (val.target.value.length > val.target.max) {
    return val.target.value.slice(0, val.target.max);
  }
  return val.target.value;
};

const maxCharChecker = (inputValue, maxValue) => {
  if (inputValue.target.value.length >= maxValue) {
    return "";
  }
  return `Please enter at least ${maxValue} characters`;
};

const minCharChecker = (inputValue, minValue) => {
  if (minValue >= inputValue.target.value.length) {
    return "";
  }
  return `Please enter at least ${minValue} characters`;
};

const email = (email, id) => {
  if (!email) {
    document.getElementById(id).style.borderColor = "red";
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    document.getElementById(id).style.borderColor = "red";
    return "Incorrect email format";
  }
  document.getElementById(id).style.borderColor = "#ced4da";
  return "";
};

const password = (password, id) => {
  if (!password) {
    document.getElementById(id).style.borderColor = "red";
    return "Password is required";
  } else if (password.length < 8) {
    document.getElementById(id).style.borderColor = "red";
    return "Password must have a minimum 8 characters";
  } else if (password.length > 12) {
    document.getElementById(id).style.borderColor = "red";
    return "Password must have a minimum 8 characters";
  }
  document.getElementById(id).style.borderColor = "#ced4da";
  return "";
};

const handleOnBlur = (val, setErrors) => {
  let message = "";

  if (val.target.id === "first_name") {
    message = isEmpty(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, firstName: message };
    });
    if (message === "") {
      message = maxCharChecker(val, 3);
      setErrors((old) => {
        return { ...old, firstName: message };
      });
    }
  } else if (val.target.id === "last_name") {
    message = isEmpty(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, lastName: message };
    });
    if (message === "") {
      message = maxCharChecker(val, 3);
      setErrors((old) => {
        return { ...old, lastName: message };
      });
    }
  }
  else if (val.target.id === "name") {
    message = isEmpty(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, name: message };
    });
    if (message === "") {
      message = maxCharChecker(val, 3);
      setErrors((old) => {
        return { ...old, name: message };
      });
    }
  }
  else if (val.target.id === "cnic") {
    message = isEmpty(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, cnic: message };
    });
    if (message === "") {
      message = maxCharChecker(val, 3);
      setErrors((old) => {
        return { ...old, cnic: message };
      });
    }
  } else if (val.target.id === "category_name") {
    message = isEmpty(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, category_name: message };
    });
    // if (message === "") {
    //   message = minCharChecker(val, 3);
    //   setErrors((old) => {
    //     return { ...old, category_name: message };
    //   });
    // }
  } else if (val.target.id === "email") {
    message = email(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, email: message };
    });
  } else if (val.target.id === "password") {
    message = password(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, password: message };
    });
  } else if (val.target.id === "verificationCode") {
    message = isEmpty(val.target.value, val.target.id);
    setErrors((old) => {
      return { ...old, verificationCode: message };
    });
    if (message === "") {
      message = maxCharChecker(val, 4);
      setErrors((old) => {
        return { ...old, verificationCode: message };
      });
    }
  }
};

const FormValidator = {
  isEmpty,
  maxLengthCheck,
  email,
  password,
  handleOnBlur,
  maxCharChecker,
};

export default FormValidator;
