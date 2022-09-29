# Third challenge for the UT-Austin Full Stack Development Bootcamp

## Develop a Random Password Generator 


___


This is the first week of Javascript lessons and our first challenge is to take the basics that we've learned and use them to create a function that will generate a random password. It's essentially a string of random characters but the end user can make choices to determine the final result.


![Screenshot of Password Generator](./images/Password%20Generator%20Homepage.jpg)


___



## How to use

On page load, you're confronted with a large red button that says "Generate." One you push that button, a series of system dialogs will pop up asking you for different parameters in building your password.

The first option is for the length of the password, which can be from 8 to 128 characters.

The second option is whether you want to include lower case letters or not. By clicking "OK" in the system dialog, you're saying you want to include lower case letters and that at least one will be included in the final password.

The exact same process occurs for three more options: upper case letters, numbers, and special characters.

Once all of the selections are made, the function completes and populates the text-box in the center of the screen with your newly generated password.

If there are any errors in selections made, an alert will pop up to let you know about the error and you'll be able to click the "Generate" button to try again.


___


## Changes Made and Lessons Learned

- I put in some logic to verify valid user input, but the function just quit without much fanfare and little to remind the end user what the problem was in the first place. In order to make a slightly better user experience, I returned some additional text when exiting the function that would populate the main page with additional prompts to help use the tool.

![Password Generator showing help text for invalid password length](./images/Password%20Gen%20Wrong%20Size%20input.jpg)![Password Generator showing help text for not selecting any valid characters](./images/Password%20Gen%20no%20selection%20error.jpg)

*Help text for incorrect password length and for not selecting any character types *

 - My first plan was to use long strings of characters as the seeds for the password generator. I went ahead and made those strings until I started to wonder about special characters. I wasn't sure if the `\` that's used to escape characters from strings would be counted as part of the index when trying to use methods like `charAt()`. So while I considered switching over to arrays, I decided to see if I could figure it out. So after a few rounds of `console.log()` I learned that javvascript doesn't include them so I can get an accurate index of the string. So continue with strings I did.

- At the end of the function I ended up with a password that was "mostly" random. In order to ensure there was at least one of each character element the end user selected, I immediately added one random character to the final password string. After those initial four selections everything, else was completely random. But those first four characters meant it wasn't random enough. I initially ran into some problems with shuffling the contents of the string, so I ended up finally using arrays. I converted the string into an array using `.split` and randomly redistributed each letter into a new string using the `.splice` method. Now the password is truly random.

- I added initial text to the HTML to give the user a prompt to press the "Generate" button.


___



## Possible Future Changes

- I would love to find a way to have styled alerts instead of system alerts for the prompts for user input. That feels like later in the Bootcamp.
- Add a final round of validation to quadruple check that the final password meets all the criteria


___



## Credits


The original concept of the page, including the HTML framework and lines 1-12 of the script.js file was created by staff of the UT Austin Full Stack Development Bootcamp. Thanks to Leah, Ian, Negin, Diem, and all the students who work with me daily to keep improving. 


___



## License

MIT License

Copyright (c) 2020 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.