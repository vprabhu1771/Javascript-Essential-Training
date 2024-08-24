window.onload = function()
{
        // Creates a new FormData object.
        const data = new FormData();


        // Appends a new value onto an existing key inside a FormData object, or 
        // adds the key if it does not already exist.
        data.append('name','rajesh');
        data.append('name','kumar');
        data.append('age','25');


        // Loop Through FormData Object with key and value
        // for(var element of data)
        // {
        //     console.log(element[0] + " " + element[1]);
        // }


        // Returns an iterator allowing to go through all key/value pairs contained in this object.
        // for(var element of data.entries())
        // {
        //     console.log(element[0] + " " + element[1]);
        // }

        // Deletes a key/value pair from a FormData object.
        // data.delete('name');

        // Returns the first value associated with a given key from within a FormData object.  
        // console.log(data.get('name'));

        // Returns an array of all the values associated with a given key from within a FormData.
        // console.log(data.getAll('name'));

        // Returns a boolean stating whether a FormData object contains a certain key.
        // console.log(data.has('age'));

        // Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
        // for(var key of data.keys())
        // {
        //     console.log(key);
        // }


        // Returns an iterator allowing to go through all values  contained in this object.
        // for(var value of data.values())
        // {
        //     console.log(value);
        // }

        // Sets a new value for an existing key inside a FormData object, or adds the key/value if it does not already exist.
        // data.set('age',30);

        // console.log(data.get('age'));
}