const btnToggle = document.querySelector('.toggle-btn');
        
        btnToggle.addEventListener('click', function(){
            document.getElementById('sidebar').classList.toggle('active');
        });


document.querySelector('.fa-bars').addEventListener('click', function(){
	var icon = document.querySelector('.fas');

        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
});

const info = document.querySelector('.who-btn');

	info.addEventListener('click', function(){
		document.getElementById('who-am-I').classList.toggle('active');
	});