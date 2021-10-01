import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import { Header } from '../src/components/global/Header'
import { BiDoorOpen } from 'react-icons/bi'
import { Button } from '../src/components/buttons/Button'
import { useFirestore } from '../src/context/FirestoreContext'
import { serverTimestamp, updateDoc, doc, setDoc } from 'firebase/firestore'
import { Input } from '../src/components/Input'
import Container from '../src/components/Container'

const Create = () => {
  const [roomName, setRoomName] = useState<string>('')
  const router = useRouter()

  const { db, currentUser } = useFirestore()

  const createRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const roomID = nanoid(5)

    const payload: RoomList = {
      roomID,
      name: roomName,
      tasks: [],
      creator: currentUser?.userTag,
      admin: [],
      members: [],
      dateAdded: serverTimestamp(),
      requests: [],
    }

    setRoomName('')
    const updateUserRef = doc(db, 'userList', `${currentUser?.userTag}`)

    if (roomName && currentUser!.roomsCreated.length < 3) {
      const roomDocRef = doc(db, 'roomList', roomID)
      await setDoc(roomDocRef, payload)

      if (currentUser?.roomsCreated) {
        router.push(`/list`)

        await updateDoc(updateUserRef, {
          roomsCreated: [payload.roomID, ...currentUser?.roomsCreated],
        })
      }
    }
  }

  return (
    <Container>
      <Header title='Create a Room' />
      <form
        onSubmit={createRoom}
        className='w-full flex justify-center flex-col items-center'
      >
        <Input
          handleChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          placeholder='enter room name'
          max={15}
        />
        <div className='inline-block mx-auto mt-6'>
          <Button desc='Create room' type='submit' Icon={BiDoorOpen} />
        </div>
      </form>
    </Container>
  )
}

export default Create
