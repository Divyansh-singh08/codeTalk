class ChatEngine{constructor(e,s){this.chatBox=$(`#${e}`),this.userEmail=s,this.socket=io.connect("http://localhost:5000"),this.userEmail&&this.connectionHandler()}connectionHandler(){let e=this;console.log(e),this.socket.on("connect",function(){console.log("connection done using socket...!"),e.socket.emit("join_room",{user_email:e.userEmail,chatroom:"codeTalkRoom"}),e.socket.on("user_joined",function(e){console.log(" a user  joined ")})}),$("#sends-message").click(function(){let s=$("#chat-message-input").val();""!=s&&e.socket.emit("send_message",{message:s,user_email:e.userEmail,chatroom:"codeTalkRoom"})}),e.socket.on("receive_message",function(s){console.log("message received",s.message);let o=$("<li>");console.log(o);let n="other-message";console.log(n),s.user_email==e.userEmail&&(n="self-message"),o.append($("<span>",{html:s.message})),o.append($("<sub>",{html:s.user_email})),o.addClass(n),$("#chat-messages-list").append(o)})}}