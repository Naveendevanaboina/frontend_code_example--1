import React, { createContext, useContext, useState } from 'react';

interface Room {
  id: number;
  roomName: string;
  description: string;
  active: boolean;
  ratePlans: string[];
}

interface RoomContextType {
  rooms: Room[];
  addRoom: (room: Omit<Room, 'id'>) => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<Room[]>([]);

  const addRoom = (room: Omit<Room, 'id'>) => {
    const newRoom: Room = {
      ...room,
      id: rooms.length + 1,
    };
    setRooms(prev => [...prev, newRoom]);
  };

  return (
    <RoomContext.Provider value={{ rooms, addRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export const useRoomContext = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoomContext must be used within a RoomProvider');
  }
  return context;
};
