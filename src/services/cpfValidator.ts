const cpfValidator = (cpf: String): boolean => {
    // Remove non-numeric characters
    cpf = cpf.replace(/\D/g, '');

    // Check if the CPF has 11 digits
    if (cpf.length !== 11) {
        return false;
    }

    // Calculate the first verification digit
    let total = 0;
    for (let i = 0; i < 9; i++) {
        total += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = total % 11;
    let digit1 = remainder < 2 ? 0 : 11 - remainder;

    // Check the first verification digit
    if (digit1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Calculate the second verification digit
    total = 0;
    for (let i = 0; i < 10; i++) {
        total += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = total % 11;
    let digit2 = remainder < 2 ? 0 : 11 - remainder;

    // Check the second verification digit
    if (digit2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

export default cpfValidator;