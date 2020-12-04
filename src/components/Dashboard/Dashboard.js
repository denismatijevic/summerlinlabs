import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import "./style.css";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.pushState("/login")
    } catch {
      setError('Failed to logout')
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="text-center mb-4">Profile</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn primary w-100 mt-3">
            Update Profile
        </Link>
        </Card.Body>
      </Card>
      <div className="container admin-container w-100 text-center mt-2">
        <Link to="/admin">
        <Button className="row see-all-schedule" >See All Schedule</Button>
        </Link>
        <Button className="row" variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  )
}
