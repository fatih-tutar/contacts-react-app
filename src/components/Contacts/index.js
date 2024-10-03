import {useState, useEffect} from 'react'

import './styles.css'

import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Fatih',
      phone_number: '0531 542 63 68'
    },
    {
      fullname: 'Mehmet',
      phone_number: '0532 753 63 59'
    },
    {
      fullname: 'Murat',
      phone_number: '0533 542 42 68'
    }
  ])

  useEffect(() => {
    console.log(
      contacts
    );
    
  }, [contacts])

  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts