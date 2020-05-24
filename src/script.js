
    let socket = io()
    let roomno=0;
    let symbol='-';
    function enableall(){
        x = document.querySelectorAll(".markbtn");
        for (i = 0; i < x.length; i++) {
          x[i].disabled=false;
        }
    }
    function disableall(){
        x = document.querySelectorAll(".markbtn");
        for (i = 0; i < x.length; i++) {
          x[i].disabled=true;
        }
    }

    socket.on('winner', (data) =>{
        alert("winner : " + data.winner)
    })

    socket.on('created', (data) => {
  
        document.getElementById('room').innerHTML='Room ID is '+ data.roomid;
        roomno=data.roomid;
        symbol='X';

  })
  socket.on('enable', (data) => {
  
  enableall();

})
  socket.on('clicked', (data) => {
  
    document.getElementById('b'+data.box).innerHTML= data.symbol;
    

})
  socket.on('joined', (data) => {
  
    document.getElementById('room').innerHTML='Room ID is '+ data.roomid;
    $('#loginBox').hide()
    $('#gamebox').show()
    roomno=data.roomid;
    symbol='O';

})
socket.on('invalidroom', () => {
  
    alert("invalid room");


})
$( document ).ready(function() {

    $('#m1').click(() => {
    
        socket.emit('click', {
            box: 1,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m2').click(() => {
    
        socket.emit('click', {
            box: 2,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m3').click(() => {
    
        socket.emit('click', {
            box: 3,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m4').click(() => {
    
        socket.emit('click', {
            box: 4,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m5').click(() => {
    
        socket.emit('click', {
            box: 5,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m6').click(() => {
    
        socket.emit('click', {
            box: 6,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m7').click(() => {
    
        socket.emit('click', {
            box: 7,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m8').click(() => {
    
        socket.emit('click', {
            box: 8,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })
    $('#m9').click(() => {
    
        socket.emit('click', {
            box: 9,
            roomid:roomno,
            symbol:symbol,
        })
        disableall();
    })


    $('#loginBox').show()
    $('#gamebox').hide()

$('#btncreate').click(() => {
    $('#loginBox').hide()
    $('#gamebox').show()

    socket.emit('create', {
        username: $('#username').val(),
        
    })
})

$('#btnjoin').click(() => {
  

    socket.emit('join', {
        username: $('#username').val(),
        roomid:  $('#roomno').val(),
        
    })
})
});