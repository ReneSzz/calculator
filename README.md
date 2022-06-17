# calculator


Things that gave me trouble : 

The first issue that I ran into was the fact that I tried to give each button have their own click event..... that would have been ugly... 

Turns out you can just use the innertext to get the information from it! great to know LOL. 

The evaluation function gave me some trouble because for some reason I forgot to the return the value of the sum after the operations too place. 

Another thing that gave me issues is doing the operation instantly after there being 2 operators in the calculator. Ended up just having to use one argument
checking the secondOperand. I was trying to use both the current and secondOperand as arguments to check if two operators were being used but for whatever reason that was causing issues, 
good thing to know the simplier answer was the fix! 

Still needs to be done :

Currently need to make sure only one decimal can be used in the numbers.
