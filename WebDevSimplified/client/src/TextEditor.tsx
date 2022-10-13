import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Socket, io } from 'socket.io-client'

export default function TextEditor() {
    interface Io {
        socket: Socket;
    }

    const [socket, setSocket] = useState<Io['socket']>()
    const [quill, setQuill] = useState()

    useEffect(() => {
        const s = io("http://localhost:3001")
        setSocket(s)
        

        return () => {
            s.disconnect()
        }
    }, [])

    const [value, setValue] = useState('');

    return <ReactQuill className='text-editor' theme="snow" value={value} onChange={setValue} />;
}
