function validateCpf(cpf) {
    const errors = []
    if (isNaN(cpf)) {
        errors.push({
            message: `O CPF [${cpf}] deve conter apenas numeros`,
            name: 'InvalidFormatError'
        })
    }
    if (cpf.length !== 11) {
        errors.push({
            message: `O CPF [${cpf}] deve ter 11 digitos`,
            name: 'InvalidLenghtError'
        })
    }

    return {
        valid: !errors.length,
        errors,
    }
}

for (const cpf of ['123', 'abc', '12345678901']) {

    const { valid, errors } = validateCpf(cpf)
    if (valid) {
        console.log(`O CPF [${cpf}] é válido`)
        continue
    }

    errors.forEach(({ message, name}) => {
        console.log(`[${name}] - ${message}`)
    })

}
