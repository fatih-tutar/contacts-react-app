import { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
      )
    })

  console.log("filtered",filtered);
  

  return (
    <div>
      <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>

      <ul style={{ listStyleType:'none' }}>
        {
          filtered.map((contact, i) => (
            <li key={i}>{contact.fullname} / {contact.phone_number}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default List