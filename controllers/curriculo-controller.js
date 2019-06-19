const CurriculoModel = require('../models/curriculo-model');

exports.getData = () => {
    return CurriculoModel;
}

exports.getName = () => {
    return CurriculoModel.getName;
}

exports.getTitle = () => {
    return CurriculoModel.getTitle;
}

exports.getProfession = () => {
    return CurriculoModel.getProfession;
}

exports.getDescription = () => {
    return CurriculoModel.getDescription;
}

exports.getExperience = () => {
    return CurriculoModel.getExperience;
}

exports.getEducation = () => {
    return CurriculoModel.getEducation;
}

exports.getSkills = () => {
    return CurriculoModel.getSkills;
}