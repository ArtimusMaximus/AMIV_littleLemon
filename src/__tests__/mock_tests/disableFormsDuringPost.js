/**
 * @jest-environment jsdom
 */


import { JSDOM } from "jsdom";

const dom = new JSDOM(
    `<!DOCTYPE html> 
        <html>
            <body><input /> <input id="in" name="this is a name" /> <input /> <textarea></textarea></body>
        </html>
    `, {
            contentType: 'text/html'
        }
);

    let inputsArr = dom.window.document.querySelectorAll('input');
    let textArea = dom.window.document.querySelector('textarea');
    const allInputsArr = [...inputsArr, textArea];


export function disableFormsDuringPost(Boolean) {
    
    if (Boolean) {
        allInputsArr?.forEach((i) => {
            i.disabled = Boolean
        })
    } else {
        allInputsArr?.forEach((i) => {
            i.disabled = Boolean
        })
    }
    
    if (Boolean) return allInputsArr.reduce((a,b) => a !== b) // meaning all items of the array should be disabled
    if (!Boolean) return allInputsArr.reduce((a,b) => a === b) // all items of the array should match false, as in not disabled
}

export function sum(a, b) { // environment setup basic test
    return a + b
}