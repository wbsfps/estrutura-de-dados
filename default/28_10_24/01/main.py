# 1
integer = 1
float_number = 1.0
string = "string"

print(integer, float_number, string)

# 2
n1 = 1
n2 = 2

big_number = f'{n1}' if n1 > n2 else f'{n2}'
diff = n1 - n2

print(big_number, diff)

# 3
sum_ = 0
for i in range(1, 11):
    sum_ += i

print(sum_)

# 4
numbers_list = []
media = 0
for i in range(1, 6):
    number = int(input("Enter a number: "))
    numbers_list.append(number)
    media = sum(numbers_list) / len(numbers_list)
print(numbers_list, media)
