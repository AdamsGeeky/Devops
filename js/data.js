/*
0 - code string (Code need to be paste as 1st parameter)
1 - Answer string (which will display next line)  if you have else keep blank it.
2 - to show input box need to pass "write" else keep blank it.
3 - wrong feedback text
4 - type of input = text/password
*/
/* Important notes
	\ will not work, so need to put double \\ for each single \
	for < use &lt; and > use &gt;
*/
var programmeStr=[	['student:/tmp> ','whereis gcc', 'write', 'Please type "whereis gcc" and press <b>Enter</b>.','You have successfully completed the assigned task. Proceed and view the present working directory.'],
					
					['gcc: /usr/bin/gcc /usr/lib/gcc /usr/libexec/gcc /usr/lib64/ccache/gcc /usr/share/man/man1/gcc.1.gz<br/>student:/tmp> ','pwd', 'write','Please type the "pwd" command and press <b>Enter</b>.','You have successfully completed the assigned task. You can now change the current working directory to /usr/bin .'],
					
					['student:/tmp><br/>student:/tmp> ','cd /usr/bin', 'write','Please type "cd /usr/bin" and press <b>Enter</b>.','You have successfully completed the assigned task. Now, you can change the current working directory to /home/student .'],
					
					['student:/usr/bin> ','cd', 'write','Please type "cd" and press <b>Enter</b>.','You have successfully completed the assigned task. You can change the present working directory to the parent directory.'],
					
					['student:/home/student> ','cd ..', 'write','Please type "cd .." and press <b>Enter</b>.','You have successfully completed the assigned task. Now, you can change the present working directory to the previous directory by the shortcut method i.e using \'-\' operator.'],
					
					['student:/home> ','cd -', 'write','Please type "cd -" and press <b>Enter</b>.','You have successfully completed the assigned task. You can now view the present working directory.'],
					
					['/home/student<br/>student:/home/student> ','pwd', 'write','Please type "pwd" and press <b>Enter</b>.',''],
					
					['/home/student<br/>student:/home/student> ','', '','']
				];