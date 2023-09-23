import "./onlineloan.scss"
import React from 'react'
import {useFormik} from 'formik'

import { sqlDate } from "../../../helpers/formatters";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { onlineLoanSchema } from "../../../schemas/onlineLoanSchema";
import popAction from "../../../helpers/popAction";
import apiCrud from "../../../api/apiCrud";
import useGetUserFixedDeposits from "../../../hooks/queries/users/useGetUserFixedDeposits";

function OnlineLoan() {
  const {data: fixed_deposits} = useGetUserFixedDeposits();

  // handle user inputs
	const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
		initialValues: {
			FDID: '',
			amount: '',
      timePeriod: '',
		},
		validationSchema: onlineLoanSchema,
		onSubmit: (values)=> { 
      popAction(
        'Are you sure?', 
        `A loan of Rs. ${values.amount} will be created to be paid in ${values.timePeriod} years.`,
        'Proceed',
        ()=>apiCrud(`/api/createOnlineLoan`, 'POST', 'Successful transaction', {
          FDID: values.FDID,
          amount: values.amount,
          applyDate: sqlDate(new Date()),
          timePeriod: values.timePeriod,
        })()
      )
		}
})

  const onlineLoanForm =(
		<main className='onlineloan-form'>
      <form action="/home" onSubmit={handleSubmit}>

        <div className="input-holder">
          <label>Linked Fixed Deposit Number</label><br/>
          <select 
              name="FDID"
              value={values.FDID}
              onChange={handleChange}
              onBlur={handleBlur}>
              <option>Select Fixed Deposit</option>
              {fixed_deposits?.map((fixed_deposit) => (
                <option key={fixed_deposit.ID} value={fixed_deposit.ID}>{fixed_deposit.ID}</option>))}
          </select>
          {touched.FDID 
            ? 
              errors.FDID 
              ? <p className="error">{errors.FDID}</p> 
              : <CheckCircleIcon className='icon'/>
            :
            null
          }
        </div>

        <div className="input-holder">
          <label>Amount</label><br/>
          <input 
          type="text" 
          name="amount" 
          required
          placeholder={'Enter amount'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.amount}
          />							
          {touched.amount 
            ? 
              errors.amount 
              ? <p className="error">{errors.amount}</p> 
              : <CheckCircleIcon className='icon'/>
            :
            null
          }
        </div>

        <div className="input-holder">
          <label>Time Period (Years)</label><br/>
          <input 
          type="text" 
          name="timePeriod" 
          required
          placeholder={'Enter time period in years'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.timePeriod}
          />							
          {touched.timePeriod 
            ? 
              errors.timePeriod 
              ? <p className="error">{errors.timePeriod}</p> 
              : <CheckCircleIcon className='icon'/>
            :
            null
          }
        </div>

        <div className="input-holder">
          <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to the <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of use</a></span>.
        </div>

        <button id="sub_btn" type="submit">Submit</button>

      </form>
		</main>
	)

  return (
    <div className="onlineloan">

      <div className="title">
        <h2>Get Online Loan</h2>
      </div>

      {onlineLoanForm}

    </div>
  )
}

export default OnlineLoan