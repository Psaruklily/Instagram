   formElem.onsubmit = async(e) => {
       e.preventDefault();
       let form = new FormData(formElem);
       console.log(form.get('email'));
       let name = document.getElementById('first-name').value;
       let surname = document.getElementById('last-name').value;
       let email = document.getElementById('email').value;
       let response = await fetch('http://dummy.restapiexample.com/api/v1/create', {
           method: 'POST',
           body: JSON.stringify({
               name: name,
               salary: surname,
               age: email
           }),
           headers: {
               "Content-type": "application/json; charset=UTF-8"
           }
       });


       let result = await response.json();
       console.log(result);
       alert(`Hello ${result.data['name']}`);
   };



   /* fetch('http://dummy.restapiexample.com/api/v1/create', {
           method: 'POST',
           body: JSON.stringify({
               name: 'abd',
               salary: 'bar',
               age: 1
           }),
           headers: {
               "Content-type": "application/json; charset=UTF-8"
           }
       })
       .then(response => response.json())
       .then(json => console.log(json)) */