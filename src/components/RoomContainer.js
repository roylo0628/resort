import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { withRoomConsumer } from '../context';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )

}

export default withRoomConsumer(RoomContainer)

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from './Loading';
// import { RoomConsumer } from '../context';


// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         // console.log(value)
//         const { loading, sortedRooms, rooms } = value

//         if(loading) {
//           return <Loading />
//         }

//         return (
//           <div>
//             Hello from RoomContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         )
//       }}
//     </RoomConsumer>
//   )
// }
