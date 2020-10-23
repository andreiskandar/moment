import React from 'react'
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header'
import Employee from '../Schedule/components/Employee'
import ShiftBlock from '../Schedule/components/ShiftBlock'
import Modal from '../Schedule/components/Modal'


import './styles.scss'

export default (props) => {

  // useEffect(
  //   getRequest
  // )
  return (
    <div className="scroll">
      <Card className="schedule">
        <Header />
        <Employee name="Tristan Jacobs" avatar="https://randomuser.me/api/portraits/thumb/women/4.jpg" events='3' hours="1" />
        <Employee name="Pierre Jackson" avatar="https://randomuser.me/api/portraits/thumb/men/51.jpg" hours='2'/>
        <Employee name="Samantha Queen" avatar="https://randomuser.me/api/portraits/thumb/women/53.jpg" hours='10.5'/>
        <Employee name="Samantha Queen" avatar="https://randomuser.me/api/portraits/thumb/women/53.jpg" hours='10.5'/>
        <Employee name="Samantha Queen" avatar="https://randomuser.me/api/portraits/thumb/women/53.jpg" hours='10.5'/>
        <Employee name="Samantha Queen" avatar="https://randomuser.me/api/portraits/thumb/women/53.jpg" hours='10.5'/>
        <Employee name="Samantha Queen" avatar="https://randomuser.me/api/portraits/thumb/women/53.jpg" hours='10.5'/>
      </Card>
      <ShiftBlock/>
      <Modal/>
    </div>
  )
}
