import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//-- use swal for pop messages

// icons: success / error / warning / info / question

const MySwal = withReactContent(Swal)

function popAlert(in_title, icon) {

  MySwal.fire({
    icon: icon ? icon : 'success',
    title: in_title ? <i>{in_title}</i> : 'Invalid!',
    html: <i></i>,
  })
}

export default popAlert