#!/usr/bin/python3

str = 'Runoob'

print (str)          # 输出字符串
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次
print (str + "TEST") # 连接字符串


word = 'Python'
print (word[0],word[-1]) #P n
print (word[-1],word[-6]) # n P

#字符串可以用+运算符连接在一起，用*运算符重复
#Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始
#Python中的字符串不能改变
