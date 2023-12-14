class InvalidFormatError extends Error {
    constructor(message) {
        super(message)
        this.name = 'InvalidFormatError'
    }
}

class InvalidLengthError extends Error {
    constructor(message) {
        super(message)
        this.name = 'InvalidLengthError'
    }
}

function validateCpf(cpf) {
    if (isNaN(cpf)) {
        throw new InvalidFormatError(`O CPF [${cpf}] deve conter apenas numeros`)
    }
    if (cpf.length !== 11)
        throw new InvalidLengthError(`O CPF [${cpf}] deve ter 11 digitos`)
}

for (const cpf of ['123', 'abc', '12345678901']) {
    try {
        validateCpf(cpf)
        console.log(`O CPF [${cpf}] é válido`)
    } catch (error) {
        if (
            error instanceof InvalidFormatError ||
            error instanceof InvalidLengthError
        ) {
            console.log(error.message)
            continue
        }

        console.log('Erro desconhecido', error.message)
    }
}
