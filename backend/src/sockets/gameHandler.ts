import { Server, Socket } from 'socket.io';

interface GameState {
  userId: string;
  username: string;
  towerHeight: number;
  score: number;
}

const activeGames: Record<string, GameState> = {};

export const handleSocketEvents = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join-game', (data: { userId: string; username: string }) => {
      activeGames[socket.id] = {
        userId: data.userId,
        username: data.username,
        towerHeight: 0,
        score: 0
      };
      io.emit('leaderboard-update', Object.values(activeGames));
    });

    socket.on('block-placed', (data: { towerHeight: number; score: number }) => {
      const state = activeGames[socket.id];
      if (state) {
        state.towerHeight = data.towerHeight;
        state.score = data.score;
        io.emit('leaderboard-update', Object.values(activeGames));
      }
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
      delete activeGames[socket.id];
      io.emit('leaderboard-update', Object.values(activeGames));
    });
  });
};
