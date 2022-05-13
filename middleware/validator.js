  
const { check, validationResult } = require("express-validator");


exports.registerRules = () => [
    check(`fullName`, ` veuillez renseigner le champ de nom d'utilisateur`).notEmpty(),
    check(`email`, `Veuillez renseigner le champ de l'adresse email`).notEmpty(),
    check(`email`, `veuillez inclure @ dans l'adresse email `).isEmail(),
    check(`phone`, `Veuillez renseigner le champ de Numero de téléphone`).notEmpty(),
    check(`phone`, `le numero de telephone au minimum 8 caractére`).isLength({ min: 8 }),
    check(`password`, `Veuillez renseigner le champ de mot de passe`).notEmpty(),
    check(`password`, `Mot passe doit etre entre 6 et 20 caractére`).isLength({ min: 6, max: 20 })
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req)

    errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() })
}
