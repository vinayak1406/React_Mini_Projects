import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
const TextSpeech = () => {
  const [textCopy, setTextcopy] = useState()
  const [isCopied, setCopied] = useClipboard(textCopy,{successDuration:1000});
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div>
      <h2>Speech to Text-Converter</h2>
      <div className="border-2" onClick={() => setTextcopy(transcript)}>
          <p>{transcript}</p>
      </div>
      <button className='border-2 bg-slate-500 px-2 rounded-md' onClick={setCopied}>
        {isCopied ? "Copied" : "Copy to clipboard"}</button>
      <button className='border-2 bg-slate-500 px-2 rounded-md' onClick={startListening}>Start</button>
      <button className='border-2 bg-slate-500 px-2 rounded-md' onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>
  )
}

export default TextSpeech

