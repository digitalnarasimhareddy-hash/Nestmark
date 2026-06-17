
import React, { useState } from 'react';

export default function App() {
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);

  const sendMessage=async()=>{
    if(!message.trim()) return;

    const text=message;
    setMessages(prev=>[...prev,{role:'You',content:text}]);
    setMessage('');

    try{
      const res=await fetch('http://localhost:3001/api/chat',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({message:text})
      });

      const data=await res.json();

      setMessages(prev=>[...prev,{
        role:'AI',
        content:data.response || data.message || JSON.stringify(data)
      }]);
    }catch(e){
      setMessages(prev=>[...prev,{role:'AI',content:'Connection error'}]);
    }
  };

  return (
    <div style={{maxWidth:'1000px',margin:'20px auto',fontFamily:'Arial'}}>
      <h1>AI Assistant Bot</h1>
      <div style={{height:'500px',overflowY:'auto',border:'1px solid #ddd',padding:'15px',borderRadius:'10px'}}>
        {messages.map((m,i)=>
          <div key={i} style={{marginBottom:'10px'}}>
            <b>{m.role}:</b> {m.content}
          </div>
        )}
      </div>

      <div style={{display:'flex',gap:'10px',marginTop:'15px'}}>
        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          onKeyDown={(e)=>e.key==='Enter'&&sendMessage()}
          style={{flex:1,padding:'12px'}}
          placeholder='Ask anything...'
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
