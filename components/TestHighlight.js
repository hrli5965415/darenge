import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser';

export const rawSnippet = `
  <h1>test h1</h1>
  <div className='code-wrapper'>
    <pre>
<code className='language-html'>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;link rel="stylesheet" href="style2.css"&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- The Redux Toolkit package is intended --&gt;
    &lt;p&gt;
        The Redux Toolkit package is intended to be the standard way to write Redux logic. 
        It was originally created to help address three common concerns about Redux:
    &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
  </pre>
  </div>
  `


// export const TestHighlight = () => {

  
//   useEffect(()=>{
//     import('prismjs/plugins/line-highlight/prism-line-highlight.min.js').then(()=>{
//       Prism.highlightAll();
//     })
//     const copy = document.querySelector('.icon')
//     copy.addEventListener('click', ()=>{
//       navigator.clipboard.writeText(rawSnippet)
//     })

//   },[])


  
//   return (
//     <StyledTestHighlight>
      
//       <div>
//         {parse(rawSnippet)}
//       </div>
//     </StyledTestHighlight>
//   )
// }


// const StyledTestHighlight = styled.div`
//   font-size: 25px;
//   border-radius: 10px;
//   max-width: 1100px;
//   position: relative;

//   .codeWrapper{
//     position: relative;
//   }

//   .icon {
//     position: absolute;
//     color: white;
//     top: 5px;
//     right: 5px;
//     z-index: 999;
//     cursor: pointer;
//   }
// `


