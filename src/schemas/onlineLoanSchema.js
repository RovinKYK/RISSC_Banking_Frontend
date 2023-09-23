import * as yup from 'yup'

export const onlineLoanSchema = yup.object({
  FDID: yup.string()
    .required('Fixed deposit number is required'),
  amount: yup.number()
    .positive('Enter a vaild amount')
    .required('Amount is required'),
  timePeriod: yup.number()
    .positive('Enter a vaild time period')
    .max(5,'Maximum time period is 5 years')
    .integer('Time period cannot be a decimal')
    .required('Time period is required'),
})