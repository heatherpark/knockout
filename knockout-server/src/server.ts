export default function startServer(store: any) {
  const io = require('socket.io')(8090);

  store.subscribe(
    () => io.emit('state', store.getState())
  );

  io.on('connection', (socket: any) => {
    socket.emit('state', store.getState());
    socket.on('action', store.dispatch.bind(store));
  });
}