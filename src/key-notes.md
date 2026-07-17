Why does React need a key on list items?
React requires a key prop to give each list item a unique stable identity. 

What happens when you use the array index as a key?
The list will keep on shifting indices and cause react to map data to the wrong DOM nodes leading to stale components states and visual glitches.

What is a good source of a key? (hint: unique, stable, from the data)
An id from our list or a databse ID