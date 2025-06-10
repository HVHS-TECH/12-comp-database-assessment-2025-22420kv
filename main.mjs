/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by Kyla, Term 2 2025
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_authenticate, fb_write, fb_readRecord}
 from './script.mjs';
    window.fb_authenticate  = fb_authenticate;
    window.fb_write = fb_write;
    window.fb_readRecord = fb_readRecord;


document.body.style.overflow = 'hidden';
/**************************************************************/
//   END OF CODE
/**************************************************************/
