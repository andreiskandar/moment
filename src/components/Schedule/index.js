import React from 'react'
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header'
import Employee from '../Schedule/components/Employee'

import './styles.scss'

export default function index() {
  return (
    <Card className="schedule">
      <Header />
      <Employee />
    </Card>
  )
}