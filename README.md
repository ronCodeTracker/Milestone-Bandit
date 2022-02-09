# Milestone-Bandit



I started out with the idea to create an indeginous to the earth slot machine game.  I had played one that was exceptional for a long time till it was made inaccessable.  The graphics on that game were great.  It made you want to save the world from all that ailes it.  It made you want to go back to the days when creator was in full force in nature.  The trees so beautiful, the animals so full of character, and native symbols full of pride.  So I made a simple object full of slot items.  I used my favorite earth items.  The wolf, probably the most popular and powerfull symbol.  The feather, a stong native symbol.  The hawk, I see many of them here in Oklahoma.  I figured I might want to use these as an array.  I converted them to an array.  

Then, I used the random method to create the randomization I needed for the game.  I used it three times for each of the slot windows.   The logic was easy.  For the logic I used the if else statement.  

There are three main parameters for winning.  
1. Three wolves is the most easy way to win so it is only 10 dollars
2. Three of most anything else is a little difficult so it was made 25 dollars all together
    10 plus 15
    The 15 is the bonus while 10 comes from original number one
3. I made a carzy_bonus item which is 100 bonus which is 125 all together.

I found it workable to add extra slot items more than once to make it easy to get the wolf.
The feather and such is easier to get due to this method of adding more than one slot item to the slot items object.

I needed to add graphics using css and photoshop.  I used from the start the holy grail app from bootcamp css activity.  They don't call it the holy grail for nothing.  This is a great template for any graphical part of any good designed app.  I also made use of display flex or flexbox.  I have found that this is very usefull, too.  The three slots were centered with flex display.  Chance did not like the changing width on the slots, so I changed it to a more steady width.  A tight radius for the border was changed to be more open.  The colors came naturually with experimentation. I did not work horribly hard on the colors for that reason. I wanted a natural picture and ended up being caveman writing style pictue.  Wolf was my first choice.  It is very popular.  I didn't prefer to have any copywrite attachment to it.  I found a picture of a wolf and drew it.  After some effort, I came up with something.  Photoshop helped me make it look cool.  Photoshop also was used to make one with another color.  

Photos for the three slots that contain the slot items:

Chance, the assistant, found a lot of little things could be improved.  Since I need so much added.  I decided to fixed what was the biggest issue I wanted to improve on.  The use of direct variable as the graphic for the slot was not perfect. It did not fit well and there was the use of the underscore.  A picture seemed better because of the fonts available in photoshop.  Plus, the font would be bigger due to the basic nature.  I wasn't sure it would work. It took some doing and is still not perfect 100%.  But I think it is a big improvement.  

The next issue was that it needed some trick way of showing the win.  I wanted it to be sharp, because to this point the app was pretty sharp.  I used functions a lot to modulize.  And, to reuse code. I used queryselector, createElement, and append to find places to show winning graphics.  I use async await for timing.  I found you not only had to creat and element, but also delete it.    

Sound:

The last thing I did as of writing this, is sound.  I looked on the internet for a good way to add sound, but they all had a player.  I did not want a player to show up.  But, I remembered that I have an app on my personal web site with music just like I wanted.  I used dev tools to find the coding on that app and copied it to my project.  That worked well.  The actual sound for the win on my slot machine application was found on the web.  I did add a new signin to my collection as a sacrifice.  Now that I think about it, I broke my desire not to have any type of copywrite type things in my application.  The sound is not my own, so I might change it latter.