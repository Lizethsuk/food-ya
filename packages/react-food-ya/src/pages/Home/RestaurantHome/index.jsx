import React, { useEffect } from 'react';
// import { UserContext } from '../../../context/userContext';

function RestaurantHome() {
  //   const { user } = useContext(UserContext);

  const fetchOwnerInfo = async () => {
    const response = await fetch('http://localhost:3001/api/restaurant/owner', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const responsejson = await response.json();
    console.log(responsejson);
  };
  useEffect(() => {
    fetchOwnerInfo();
  }, []);

  //   /api/restaurant/owner
  return (
    <>
      <p>A</p>
      <p>B</p>
    </>
  );
}

export default RestaurantHome;
