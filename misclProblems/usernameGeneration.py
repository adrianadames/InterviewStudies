"""
Programming Challenge: Username Generation
❖ You just accepted a position at NYU’s ITS department and your first task is to
write a program that generates student Net IDs for all incoming freshmen
❖ Net IDs are generated as follows:
❖ The first two characters of a student’s first name
❖ The first two characters of a student’s last name
❖ The last three characters of a student’s N#
❖ Write a program that asks the user for these three pieces of information (first
name,
last name and N#) and generate their Net ID.
❖ Note that if a student’s first name or last name is less than 2 characters then
you
should use the entire first name or last name.
"""

def usernameGenerator(first, last, n_number):
    if len(first) < 2:
        firstTwoFirstName = first
    else:
        firstTwoFirstName = first[0:2]
    
    if len(last) < 2:
        firstTwoLastName = last
    else:
        firstTwoLastName = last[0:2]
    
    lastThreeNNumber = n_number[len(n_number)-3:len(n_number)]
    # [char for char in n_number for i in range(len(n_number)-3, len(n_number))]

    netID = firstTwoFirstName + firstTwoLastName + lastThreeNNumber
    return netID

print(usernameGenerator('Adrian', 'Adames', '123456789'))

    
