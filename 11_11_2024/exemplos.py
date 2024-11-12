list_ = []

for i in range(4):
    number = int(input("Enter a number: "))
    personal_hash = number % 11
    list_.append(personal_hash)

print(list_)


def folding(number):
    square = number * number
    square_str = str(square)
    if len(square_str) > 1:
        numbers = square_str[2:4]
        numbers_int = int(numbers)

        return numbers_int % len(square_str)


print(folding(22))
print(folding(33))
print(folding(44))
print(folding(55))
