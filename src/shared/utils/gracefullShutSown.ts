// import { Server } from "node:http";

// let connections: Socket[] = [];

// export default function shutDown(event: string, server: Server) {
//   return (code: number | string) => {
//     console.info(`Received kill signal, shutting down gracefully.\nEvent: ${event}\nCode: ${code}`);
//     server.close(() => {
//       console.log('\nClosed out remaining connections');

//       process.exit(0);
//     });

//     connections.forEach((curr) => curr.end());
//     setTimeout(() => connections.forEach((curr) => curr.destroy()), 5000);
//   };
// }
