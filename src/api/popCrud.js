import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import apiCrud from './apiCrud';

const MySwal = withReactContent(Swal)

export default async function popCrud(title, placeholders, inputs, url, method, message) {
  // inputs should be an array of body request

  const { value: formValues } = await MySwal.fire({
    title: title,
    html: 
    <>
      {placeholders.map((placeholder, index) => (
        <div key={index} className='swal2-input-holder'>
          <input 
            id={`swal-input${index}`} 
            className="swal2-input" 
            placeholder={placeholder}
          />
        </div>
      ))}
    </>,
    focusConfirm: false,
    preConfirm: ()=> {
      return (
        inputs.map((input,index) => 
        document.getElementById(`swal-input${index}`).value,
        )
      )
    },
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: title
  })
  
  if (formValues) {
    const data = Object.assign(...inputs.map((input, index) => {
        return {
          [input]: formValues[index]
        }
      })
    ) 
    apiCrud(url, method, message, data)
  }
}