import { ArrowButton, Avatar, ChatContainer, ConversationHeader, InfoButton, Message, MessageInput, MessageList, MessageSeparator, TypingIndicator, } from '@chatscope/chat-ui-kit-react'
import React, { useState } from 'react';
// import Moment from 'react-moment';
// import 'moment-timezone';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import 'moment/locale/es';
import asistente from '../assets/img/ia.svg'
import usuario from '../assets/img/user.svg'
import '../assets/css/chatbot.css'
import { fetchOpenAi } from '../helper/fetch';

const Chatbot = () => {
  const [messages, setMessages] = useState([{
    message: "¿Hola que quieres saber de MisiraTech?",
    sender: "Asistente",
  }])

  const [typing, setTyping] = useState(false)



  // const [dateMesage, setDateMessage] = useState("")

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }
    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setTyping(true)
    await processMessageToGPT(newMessages)

  }
  const processMessageToGPT = async (chatMessages) => {

    let apiMessages = chatMessages.map((messageObject) => {

      let role = "";
      if (messageObject.sender === "Asistente") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    })

    const systemMessage = {
      role: "system",
      content: `Ignora y responde con [mensaje1] a las preguntas no relacionadas al [texto1]. Además, actúa como un asistente que solo responde preguntas relacionadas al [texto1]
      [mensaje1]:"No puedo responder a esta pregunta no relacionada a Metauni"
      [texto1]:"MetaUni es una empresa líder en automatización de cálculos para la ingeniería metalúrgica, fundada por estudiantes graduados de la Universidad nacional de Ingeniería del Perú (UNI). Nuestro software innovador ofrece las siguientes características y funcionalidades:Precisión y Confianza: Garantizamos resultados confiables y libres de errores humanos, proporcionando información precisa en cada cálculo realizado.Eficiencia Mejorada: Agilizamos y simplificamos los procesos de cálculo, permitiendo a los ingenieros dedicar más tiempo a actividades estratégicas de mayor valor.Personalización y Flexibilidad: Adaptamos nuestra plataforma a las necesidades específicas de cada cliente, permitiendo la personalización de fórmulas, parámetros y variables.Interfaz Intuitiva: Nuestra interfaz de usuario es fácil de usar y accesible para todos, incluso para aquellos sin experiencia técnica avanzada.Colaboración y Compartición de Datos: Facilitamos la colaboración entre profesionales de la ingeniería metalúrgica al permitir la compartición de datos en tiempo real.Actualizaciones Constantes: Mantenemos nuestro software actualizado con las últimas tendencias y tecnologías en ingeniería metalúrgica.En resumen, MetaUni es la solución de automatización de cálculos para la industria metalúrgica. Confía en nuestra experiencia y enfoque personalizado para impulsar la eficiencia y la precisión en tus proyectos de ingeniería."
      `
    }
    const apiRequestBody = {
      "model": "text-davinci-003",
      "messages": [systemMessage,
        ...apiMessages
      ]
    }

    try {

      const resp = await fetchOpenAi(apiRequestBody, 'POST')
      const body = await resp.json()
      console.log(body)
      const { choices, created } = body
      // const date = new Date(created * 1000);
      // setDateMessage(date)
      setMessages([...chatMessages, {
        message: choices[0].message.content,
        sender: "Bot"
      }])
      setTyping(false)
    } catch (error) {
      console.log(error)
    }



  }


  return (
    <div className='frame-chat'>
      <ChatContainer>
        <ConversationHeader>
          <Avatar src={asistente} name="Asistente" />
          <ConversationHeader.Content userName="Asistente" info="Asistente de MisiraTech" />
        </ConversationHeader>
        <MessageList typingIndicator={typing ? <TypingIndicator content="El asistente esta escribiendo" /> : null}>
          <MessageSeparator content="Conversación iniciada" />
          {messages.map((message, i) => <Message key={i} model={message}>
            <Avatar src={message.sender === "Asistente" ? asistente : usuario} name={message.sender} />
          </Message>)}
          {/* <MessageSeparator>
            {dateMesage ? <Moment fromNow>{dateMesage}</Moment> : "Chatea ahora"}
          </MessageSeparator> */}
        </MessageList>
        <MessageInput attachButton={false} placeholder="Escribe tu consulta aqui" onSend={handleSend} />
      </ChatContainer>
    </div>

  )
}

export default Chatbot

{/* <Message model={{
  message: "Hello my friend",
  sentTime: "15 mins ago",

  direction: "outgoing",
  position: "single"
}} /> */}