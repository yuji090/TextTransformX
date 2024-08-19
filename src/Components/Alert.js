import React from 'react'

export default function Alert(props) {
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.m}</strong> mode enabled
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
