// we want The JS code we write to execute after the DOM is fully loaded
// to do this, our codes can either be in `init` or  we call a function within init
const init = () => {
    //1.Add event listeners to capture form data and override a form's default behavior
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit',(e)=>{       
        e.preventDefault(); 

        const input = document.querySelector('input#searchByID');
        console.log(input.value)
        //2.Access Input Value from an Event Object
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp=> resp.json()) 
        .then(data=>{
            console.log(data)
            const title = document.querySelector('h4');
            const summary = document.querySelector('p');

            title.innerText = data.title;
            summary.innerText= data.summary;
        
        })
    })

}

document.addEventListener('DOMContentLoaded', init);
