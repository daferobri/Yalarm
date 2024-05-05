Firstly, I chose to make my project a website because I wanted to use the same profiles feature that Finance had. I thought it would be interesting to be able to access your personal alarms from any device and not just one. By using Flask, it allowed for alarms not to just be local.

I used Python, Javascript, HTML, CSS, and SQL in the making of this website. I found the format of Flask to be intuitive and useful in the making of an alarm website, and by using Bootstrap in my HTML, it allowed for a more attractive user interface.

The entire website is completely Yale-themed, down to the Yale blue buttons. I thought this would be funny, considering how a lot of Yalies put the letter Y in front of everything. This alarm could be useful for Yale students.

The app.py file is similar to the one in Finance, as well as the helpers one, albeit edited for this specific website. The bulk of work was put into the templates and the database. The alarm function is built in Javascript on the client end, and it required use of the Notification API. This was used instead of a regular alert so that audio could be played. The Javascript code takes a variable from the Python code to get the alarm times, and it compares them with the current time every minute until one of the alarm times matches.

All in all, I made the design choices I did because I believed they melded well with each other and made it easy for alarms to be accessed from multiple devices.
