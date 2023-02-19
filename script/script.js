// запускается при ззагрузке страницы
//при загрузке страницы, через фич  работаем с json 
//грузим первые 10 строк в таблицу
fetch("/json/peoples.json")

	.then(function (response) {
		return response.json();
	})
	// если всё хорошо 
	// то заполняем циклом таблицу
//парсим переменные в строки----------------------------------------------------------
	.then(function (peoples) 
	{
		let placeholder = document.querySelector("#data-output");// выбор элемента таблицы
		let out = "";// строка для разметки
		//цикл заполнения таблицы
		for (var i =0; i<10;i++) // заполняем на 10 строк в соответствии с доп заданием
		{//заполняем строку out
			//в 4 столбце значение для параметра бекграунда берется из переменной peoples[i].eyeColor
			out += `
			<tr class="t_inf" id="tablee" >
				<td class="inf" id="table1">${peoples[i].name.firstName}</td>
				<td class="inf" id="table2">${peoples[i].name.lastName}</td>
				<td class="about" id="table3">${peoples[i].about}</td>
				<td style="background-color:${peoples[i].eyeColor}; color:lightsteelblue;"id="table4">${peoples[i].eyeColor}</td>
			</tr>
		`;		
		}

		let buttonss= document.querySelector("#S_one");// блок для будующих кнопок
		let out_2 = "";// строка для разметки с кнопками
		//цикл позволяет создать в разметке кнопок, кратно 10
		for (var i =1; i<=peoples.length/10;i++)
        {
			//заполняем строку out_2
			out_2 += `
			<button class="b_tbb" id="b_tb" onclick="iter_page(this)">${i}</button>
			
		`;}
//парсим переменные в строки конец----------------------------------------------------------


//пишем полученные строки в HTML----------------------------------------
		placeholder.innerHTML = out;
		buttonss.innerHTML =out_2;
//пишем полученные строки в HTML конец----------------------------------
	});

