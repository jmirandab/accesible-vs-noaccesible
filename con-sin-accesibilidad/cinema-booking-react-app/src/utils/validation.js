export const validatePassword = (password) => {
    if (password.length < 3) return false;

    const firstThree = password.substring(0, 3);

    if (!/^\d{3}$/.test(firstThree)) return false;

    const num1 = parseInt(firstThree[0]);
    const num2 = parseInt(firstThree[1]);
    const num3 = parseInt(firstThree[2]);

    return (num2 === num1 + 1 && num3 === num2 + 1) || 
           (num2 === num1 - 1 && num3 === num2 - 1);
};

export const validateName = (name) => {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4}$/.test(name);
};

export const validateDate = (date) => {
    return date instanceof Date && !isNaN(date);
};

export const validateProvince = (province) => {
    return province !== '';
};

export const validateForm = (formData) => {
    return validateDate(formData.selectedDate) &&
           validateProvince(formData.selectedProvince) &&
           formData.selectedMovie !== null;
};