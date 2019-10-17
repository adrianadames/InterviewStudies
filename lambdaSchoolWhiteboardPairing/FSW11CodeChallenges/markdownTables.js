/*
Convert an array of data into a table in markdown format.Example input:

['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']


Example output (raw):

|name|email|
|----|-----|
|emily|emily@email.com|
|mary|maryberry@gbbs.co.uk|



Example output (viewed as .md):





Headers will always be strings and the first item in the array. Data always separated with commas, but values may not always be strings. 
*/