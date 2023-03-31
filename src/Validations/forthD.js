import * as Yup from 'yup';

const schema = Yup.object().shape({
    reg: Yup.string()
        .required('Registration number is required'),
    year: Yup.number()
        .required('Registration year is required')
        .min(1900, 'Registration year must be after 1900')
        .max(new Date().getFullYear(), 'Registration year cannot be in the future'),
    stateC:Yup.string()
        .required('Council is required'),
    spec: Yup.string()
        .required('Specialization is required'),
    qualification: Yup.string()
        .required('Qualification is required')
        .min(2, 'Qualification must be at least 3 characters')
        .max(100, 'Qualification can be at most 100 characters'),

});

export default schema;