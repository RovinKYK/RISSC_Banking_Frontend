import "./customers.scss"
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

import useGetUsers from '../../../hooks/queries/admin/useGetUsers'

function Customers() {

  const navigate = useNavigate()

  // fetch and cache all users
  const {data: users} = useGetUsers()
  // console.log(users);

  const columns = [
    { 
      field: 'id', headerName: 'ID', minWidth: 150, flex: 0.5
    },
    { 
      field: 'type', headerName: 'Type', minWidth: 70, flex: 2
    },
    { 
      field: 'name', headerName: 'Full name', minWidth: 150, flex: 3 
    },
    { 
      field: 'username', headerName: 'Username', minWidth: 150, flex: 2
    },
    { 
      field: 'email', headerName: 'Email', minWidth: 150, flex: 3 
    },
    { 
      field: 'phone', headerName: 'Phone', minWidth: 150, flex: 2
    },
  ];
  
  const rows = users?.map(user => (
    {
      id: user.ID,
      name: user.name, 
      username: user.username,
      email: user.email, 
      phone: user.contactNumber, 
      address: user.address, 
      type: user.type, 
    }
  ))

  return (
    <div className="users">

      <div className="title">
        <h2>Customers</h2>
      </div>
      <p>
        Click on customer to see user specific information 
      </p>
      <div style={{ height: 700, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {users &&
              <DataGrid
                autoHeight
                className='table'
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                sx={{
                  '& .MuiDataGrid-cell:hover': {
                    cursor: 'pointer'
                  },
                }}
                onRowClick={params => (
                  navigate(`/adminpanel/customers/${params.row.id}`, {
                    state: {
                      name: params.row.name,
                      username: params.row.username,
                      email: params.row.email,
                      phone: params.row.phone,
                      address: params.row.address,
                    }
                  })
                )}
              />
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Customers