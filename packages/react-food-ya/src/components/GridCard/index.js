import React from 'react';
import Button from '../Button/';

/* class GridCard extends React.Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <div className='grid-section'>
                 <ul className='divUlType'>
          {contacts.map((contact) => (
              <div className='card'>
                  <div className='div-img'>
              <img className='imgAvatar' src={contact.img.url}/>
              </div>
              <div className='content-div'>
              <h2>{contact.name}</h2>
              <div className='div-type-start'>
              <span>{contact.type}</span>
              <ul className='ulStars'>
              <li className='star'>{' ★ '.repeat(contact.stars)}</li>    
              </ul>
              </div>
            
               </div>
               <Button />
              </div>
          ))}
        </ul>

            </div>
         
               
        )
    }
}
 */

function GridCard (props)  {
   const contact = props.contact;
    return (
        <li className='card'  >
         <div className='div-img'>
                <img className='imgAvatar' alt="" src={contact.img.url} />
            </div> 
            <div className='content-div'>
                <h2>{contact.name}</h2>
                <div className='div-type-start'>
                    <span>{contact.type}</span>
                    <ul className='ulStars'>
                        <li className='star'>{' ★ '.repeat(contact.stars)}</li>
                    </ul>
                </div>
                
            </div>
            <Button buttonStyle={"fit-content-button margin-top"} content={"Ir a Restaurante"} url={"/restaurant"}/>
           
        </li>
    )

}
export default GridCard;