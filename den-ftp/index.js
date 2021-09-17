const FtpSrv = require('ftp-srv');

ftpServer = new FtpSrv({
    url: "ftp://127.0.0.1:21",
    greeting: ["Hey! You're now connected!"],
    pasv_url: "127.0.0.1"
});

ftpServer.on ( 'login', ( data, resolve, reject ) =>
{
  console.log ( 'data: '    + data );
  console.log ( 'resolve: ' + resolve );
  console.log ( 'reject: '  + reject );
  resolve({root:"./data/"})

});

ftpServer.on ( 'client-error', (connection, context, error) =>
{
  console.log ( 'connection: ' +  connection );
  console.log ( 'context: '    +  context );
  console.log ( 'error: '      +  error );
});


ftpServer.listen()
.then(() =>
{
  console.log ( `Server running at "ftp://localhost:21"` );
});