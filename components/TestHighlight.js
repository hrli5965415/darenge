import React, { useEffect, useState } from 'react'
import Prism from 'prismjs';
import styled from 'styled-components';
import parse from 'html-react-parser';


export const TestHighlight = () => {

  const rawSnippet = `
  <h1>test h1</h1>
  <div className='codeWrapper'>
    <span className='icon'>testIcon</span>
    <pre data-line='2-5' className='line-numbers'>
  <code className='language-javascript'>
addEventListener('load', () => {
  const code = document.querySelector('#code');
  const worker = new Worker('worker.js');
  worker.onmessage = (event) => { code.innerHTML = event.data; }
  worker.postMessage(code.textContent)
  }
}); 
  </code>
  </pre>
  </div>
  `
  useEffect(()=>{
    import('prismjs/plugins/line-highlight/prism-line-highlight.min.js').then(()=>{
      Prism.highlightAll();
    })
    const copy = document.querySelector('.icon')
    copy.addEventListener('click', ()=>{
      navigator.clipboard.writeText(rawSnippet)
    })

  },[])


  
  return (
    <StyledTestHighlight>
      
      <div>
        {parse(rawSnippet)}
      </div>
    </StyledTestHighlight>
  )
}


const StyledTestHighlight = styled.div`
  font-size: 25px;
  border-radius: 10px;
  max-width: 1100px;
  position: relative;

  .codeWrapper{
    position: relative;
  }

  .icon {
    position: absolute;
    color: white;
    top: 5px;
    right: 5px;
    z-index: 999;
    cursor: pointer;
  }
`


