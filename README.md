# NOTES

- Show what browser is being used, display to user
- Have button pull data from server (as text)
    - Check if window.XMLHttpRequest Exists (will not exist for IE)
    - If exists, create new XMLHttpRequest object
    - If it doesn't make a new ActiveXObject("Microsoft.XMLHTTP") 
- Upon button press, use the created object to retrieve the data from the server
    - use .open({method_name}, path)
    - define funciton for object's .onreadystatechange
        - check if status == 200 and readystate == 4
    - retrieve information via .responseText
    - write data to html object by finding it by id and then writing to its .innerHTML
- Run via ```python -m http.server``` or ```python -m SimpleHTTPServer```
