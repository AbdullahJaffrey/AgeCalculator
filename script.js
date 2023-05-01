function Operation_age(){
    document.getElementById('Message').innerText = '';        


    let data = document.getElementById('input-date').value;
    if (data === ''){
        document.getElementById('Message').innerText = 'Kindly, Enter some date!';
        document.getElementById('Message').style.color = 'red';
    }
    else{
        document.getElementById('Message').innerText = 'Thanks for adding the date';        
        document.getElementById('Message').style.color = 'green';
        document.getElementById('box').innerHTML = 'Your Date of Birth: ' + data
        let currentdate = new Date()
        document.getElementById('box2').innerHTML = 'Today : ' + currentdate.getFullYear()+'-0'+Number(currentdate.getUTCMonth()+1)+'-0'+currentdate.getUTCDate();       
        let result = data.slice(0, 4);
        Age = Number(currentdate.getFullYear()) - Number(result);
        document.getElementById('box3').innerHTML = 'Your Age: ' + Age + ' YEARS OLD'

    }
    
}
