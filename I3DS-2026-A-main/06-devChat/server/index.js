const console = require("console");

const app = require("express")(); // importar a biblioteca Express
const server = require("http").createServer(app); // importa modulo HTTP nativo
const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3000" }, // cors- permite que clientes de outros dominios ou ips conectem
});

const PORT = 3001; //porta naqual o servidor irá escutar conexão

io.on("connection", (socket) => {
  socket.on("set_username", (username) => {
    socket.data.username = username;
    userName(username, socket.id);
  });
  socket.on("disconnect", (reason) => {
    console.log(
      `usuário ${socket.dsta.username} desconectado! Sua id era ${socket.id}`,
    );
    console.log(`motivo: ${reason}`);
  });
  socket.on("message", (text) => {
    // Quando um cliente envia uma mensagem, o servidor:
    // 1. Cria um objeto com dados da mensagem
    // 2. Envia para TODOS os clientes conectados usando io.emit()
    // Isso permite que todos vejam a mensagem em tempo real
    io.emit("receive_message", {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
    console.log(`Usuário ${socket.data.username} enviou uma mensagem!`);
  });
});

// Registra no console quando um novo usuário se conecta
const userName = (username, id) => {
  console.log(`Usuário ${username} conectado com o seguinte id: ${id}`);
};

server.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}...`);
  console.log(`Cliente deve conectar em http://seu-ip:${PORT}`);
});
