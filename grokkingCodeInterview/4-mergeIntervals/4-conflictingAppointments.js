/*
(medium)

Problem Statement: 
-Given an array of intervals representing ‘N’ appointments, find out 
if a person can attend all the appointments.

Example 1:
    Appointments: [[1,4], [2,5], [7,9]]
    Output: false
    Explanation: Since [1,4] and [2,5] overlap, a person cannot attend 
    both of these appointments.
Example 2:
    Appointments: [[6,7], [2,4], [8,12]]
    Output: true
    Explanation: None of the appointments overlap, therefore a person 
    can attend all of them.
Example 3:
    Appointments: [[4,5], [2,3], [3,6]]
    Output: false
    Explanation: Since [4,5] and [3,6] overlap, a person cannot attend 
    both of these appointments.
*/

function conflictingAppointments(arr) {
    // - first sort by start time
    arr.sort((a,b) => a[0] - b[0]);

    let currentInterval = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let nextInterval = arr[i];

        // - at this point we know that currentInterval start time less than or equal to nextinterval start time;
        // - to check if there's overlap, we check if nextInterval starts before currentInterval ends; 
        if (nextInterval[0] < currentInterval[1]) {
            return false

            // - if nextInterval starts at the same time or after currentInterval ends, there's no overlap
        } else {
            currentInterval = nextInterval;
        }
    }

    return true
}

console.log('conflictingAppointments: ', conflictingAppointments([[1,4], [2,5], [7,9]])); // false
console.log('conflictingAppointments: ', conflictingAppointments([[6,7], [2,4], [8,12]])); // true
console.log('conflictingAppointments: ', conflictingAppointments([[4,5], [2,3], [3,6]])); // false