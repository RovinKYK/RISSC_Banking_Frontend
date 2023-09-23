import "./loanrequest.scss"
import React from 'react'
import {useFormik} from 'formik'

import { currency, sqlDate } from "../../../helpers/formatters";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { loanRequestSchema } from "../../../schemas/loanRequestSchema";
import popAction from "../../../helpers/popAction";
import apiCrud from "../../../api/apiCrud";

function LoanRequest() {
  // handle user inputs
	const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
		initialValues: {
      branchID : "",
      customerID : "",
      amount : "",
      applyDate : "",
      timePeriod : "",
      interestRate : "",
      loanPurpose : "",
      linkedAccountID : "",
		},
		validationSchema: loanRequestSchema,
		onSubmit: (values)=> { 
      popAction(
        'Are you sure?', 
        `A loan request of ${currency(values.amount)} will be created for customer ${values.customerID}`,
        'Proceed',
        ()=>apiCrud(`/api/employee/createLoanRequest`, 'POST', 'Loan request created successfully', {
          branchID : values.branchID,
          customerID : values.customerID,
          amount : values.amount,
          applyDate : sqlDate(new Date()),
          timePeriod : values.timePeriod,
          interestRate : values.interestRate,
          loanType : values.loanPurpose,
          linkedAccountID : values.linkedAccountID,
        })()
      )
		}
})

  const loanRequestForm =(
		<main className='transfer-form'>
      <form action="/home" onSubmit={handleSubmit}>

      <div className="input-holder">
          <label>Branch Number</label><br/>
          <input 
          type="text" 
          name="branchID" 
          required
          placeholder={'Enter branch number'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.branchID}
          />							
          {touched.branchID 
            ? 
              errors.branchID 
              ? <p className="error">{errors.branchID}</p> 
              : <CheckCircleIcon className='icon'/>
            :
            null
          }
        </div>

        <div className="input-holder">
          <label>Customer ID</label><br/>
          <input 
          type="text" 
          name="customerID" 
          required
          placeholder={'Enter customer ID'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.customerID}
          />							
          {touched.customerID 
            ? 
              errors.customerID 
              ? <p className="error">{errors.customerID}</p> 
              : <CheckCircleIcon className='icon'/>
            :
            null
          }
        </div>

        <div className="input-holder">
          <label>Linked Account ID</label><br/>
          <input 
          type="text" 
          name="linkedAccountID" 
          required
          placeholder={'Enter linked account ID'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.linkedAccountID}
          />							
          {touched.linkedAccountID 
            ? 
              errors.linkedAccountID 
              ? <p className="error">{errors.linkedAccountID}</p> 
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
          placeholder={'Enter loan amount'}
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
          <label>Time Period</label><br/>
          <input 
          type="text" 
          name="timePeriod"
          required 
          placeholder={'Enter a time period in years'} 
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
          <label>Interest Rate</label><br/>
          <input 
          type="text" 
          name="interestRate"
          required 
          placeholder={'Enter the interest rate'} 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.interestRate}
          />
          {touched.interestRate 
            ? 
              errors.interestRate 
              ? <p className="error">{errors.interestRate}</p> 
              : <CheckCircleIcon className='icon'/>
            :
            null
          }
        </div>

        <div className="input-holder">
          <label>Loan Purpose</label><br/>
          <input 
          type="text" 
          name="loanPurpose"
          required 
          placeholder={'Enter loan purpose'} 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.loanPurpose}
          />
          {touched.loanPurpose 
            ? 
              errors.loanPurpose 
              ? <p className="error">{errors.loanPurpose}</p> 
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
    <div className="transfer">

      <div className="title">
        <h2>New Loan Request</h2>
      </div>

      {loanRequestForm}

    </div>
  )
}

export default LoanRequest