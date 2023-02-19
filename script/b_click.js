// функция загрузки содержимого таблицы при переключении страниц
function iter_page(e){
// принимаем кнопку в аргумент точнее её текст
let iter=parseInt(e.textContent)
//переменные для итереаторов цикла задают диапозон пример(10-20)------------
let iter_2= iter*10;
let iter_3= iter_2-10;
//переменные конец----------------------------------------------------------

//-----------------------------------------работа с json-----------------------
//как и в файле script.js парсим данные с json
//но в определенном диапозоне заданном в цикле
// переменными iter_2 и iter_3
// остальное не отличается от файла script.js
    fetch("/json/peoples.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (peoples) {
		let placeholder = document.querySelector("#data-output");
		let out = "";
		for (iter_3; iter_3<iter_2;iter_3++) {
			out += `
			<tr class="t_inf" id="tablee" >
				<td class="inf" id="table1">${peoples[iter_3].name.firstName}</td>
				<td class="inf" id="table2">${peoples[iter_3].name.lastName}</td>
				<td class="about" id="table3">${peoples[iter_3].about}</td>
				<td style="background-color:${peoples[iter_3].eyeColor}; color:lightsteelblue;"id="table4">${peoples[iter_3].eyeColor}</td>
			</tr>
		`;
		
		}

		let buttonss= document.querySelector("#S_one");
		let out_2 = "";
		for (var i =1; i<=peoples.length/10;i++) {
			out_2 += `
			<button class="b_tbb" id="b_tb" onclick="iter_page(this)">${i}</button>
			
		`;}
//------------------------------------работа с json конец---------------------

//------------------------------------пишем out и out2 HTML--------------------
		placeholder.innerHTML = out;
		buttonss.innerHTML =out_2;
//------------------------------------пишем out и out2 HTML конец-------------------

//сбрасываем форму при переключении страниц--------------------
		s_form.reset();// сброс формы
		form_vis.style.display="none";//скрыть форму
		greet.style.display="flex";// показать приветсвие
// сброс формы конец--------------------------------------
	});
};








