const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

const PORT = process.env.PORT || 3344

const server = http.createServer(app)
const io = socketio(server)

let x=1;
let rooms=[];
let games=[];
let users = {
    arnav: 'agag123',
  }
let socketMap = {}

io.on('connection', (socket) => {
  console.log('connected with socket id =', socket.id)

  function login(s, u) {
    s.join(u)
    s.emit('logged_in')
    socketMap[s.id] = u
    console.log(socketMap)
  }

  socket.on('create', (data) => {
  
        login(socket, data.username)
        socket.emit('created', {
            roomid: x,
            
        })
        rooms[x]=[];
        games[x]=[];
        games[x][1]='-';
        games[x][2]='-';
        games[x][3]='-';
        games[x][4]='-';
        games[x][5]='-';
        games[x][6]='-';
        games[x][7]='-';
        games[x][8]='-';
        games[x][9]='-';
        rooms[x][0]=socket.id;
        x=x+1;

  })
  
  socket.on('click', (data) => {
    games[data.roomid][data.box]=data.symbol;
  
    if( games[data.roomid][1]==games[data.roomid][2] && games[data.roomid][2]==games[data.roomid][3] &&  games[data.roomid][2]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][2]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    } else
    if( games[data.roomid][4]==games[data.roomid][5] && games[data.roomid][5]==games[data.roomid][6] &&  games[data.roomid][5]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][5]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else
    if( games[data.roomid][7]==games[data.roomid][8] && games[data.roomid][8]==games[data.roomid][9] &&  games[data.roomid][7]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][8]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else
    if( games[data.roomid][1]==games[data.roomid][5] && games[data.roomid][5]==games[data.roomid][9] &&  games[data.roomid][5]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][5]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else
    if( games[data.roomid][3]==games[data.roomid][5] && games[data.roomid][5]==games[data.roomid][7] &&  games[data.roomid][5]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][5]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else
    if( games[data.roomid][1]==games[data.roomid][4] && games[data.roomid][4]==games[data.roomid][7] &&  games[data.roomid][4]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][4]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else
    if( games[data.roomid][2]==games[data.roomid][5] && games[data.roomid][5]==games[data.roomid][8] &&  games[data.roomid][5]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][5]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else
    if( games[data.roomid][3]==games[data.roomid][6] && games[data.roomid][6]==games[data.roomid][9] &&  games[data.roomid][6]!='-'){
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(games[data.roomid][6]=='X'){
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player1',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player1',
                
            })
        }else{
            io.to(rooms[data.roomid][0]).emit('winner',  {
                winner:'player2',
               
                
            })
            io.to(rooms[data.roomid][1]).emit('winner',  {
                winner:'player2',
                
            })
        }
    }else{
        io.to(rooms[data.roomid][0]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        io.to(rooms[data.roomid][1]).emit('clicked',  {
            box: data.box,
            symbol:data.symbol
            
        })
        if(rooms[data.roomid][1]!=socket.id){
            io.to(rooms[data.roomid][1]).emit('enable',  {
               
                
            })
        }
        if(rooms[data.roomid][0]!=socket.id){
            io.to(rooms[data.roomid][0]).emit('enable',  {
              
                
            })
        }
    }

  })

  socket.on('join', (data) => {
  if (rooms[data.roomid].length==1){
    rooms[data.roomid][1]=socket.id;
    socket.emit('joined', {
        roomid: data.roomid,
        
    })
  }else{
    socket.emit('invalidroom', {
       
        
    })
  }

})
})

app.use('/', express.static(__dirname + '/src'))

server.listen(PORT, () => {
  /* console.log(process.env.PORT) */
  console.log('Started on http://localhost:${PORT}')
})