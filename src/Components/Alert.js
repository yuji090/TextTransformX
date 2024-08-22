import React from 'react'

export default function Alert(props) {
  return (
    <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.m}</strong>
            <button type="button" class="btn" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
