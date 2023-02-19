// функция при клике на таблицу
//глобальные переменные
var form_vis =document.getElementsByClassName("section-one__info")[0];
var table = document.getElementsByTagName("table")[0];
var tbody = table.getElementsByTagName("tbody")[0];
var s_form =document.getElementById("s_f");
var col_rs=document.getElementsByClassName("about");
var all_col_rs=document.getElementsByClassName("inf");
var forms_rows =document.getElementsByClassName("section-one__ta");//строки в форме, так же для save_rows.js
var greet =document.getElementsByClassName("section-one__greeting")[0];
//глоб. переменные конец

tbody.onclick = function (e) {
    e = e || window.event;
    s_form.reset();// сброс формы
//  перебор ячеек для сброса цвета--------------------------------
    //  перебор ячеек с 3 столбца 
    for(var col_r of col_rs)
    {
        col_r.style.backgroundColor="#FFFFFF";//перекрашиваем в белый 3 столбец
    };
    //  перебор  остальных ячеек
    for(var all_col_r of all_col_rs)
    {
        all_col_r.style.backgroundColor="#FFFFFF";//перекрашиваем остальные столбцы
    };
//  перебор ячеек с 3 столбца для сброса цвета конец---------------------------

// целевой элемент проверка---------------------------------------
    var target = e.srcElement || e.target;
    while (target && target.nodeName !== "TR") {
        target = target.parentNode;
    }
//целевой элемент конец-----------------------------------------

    // если то, что нам надо ( родитель ячейки)
    if (target) {
        var cells = target.getElementsByTagName("td");
        // заполняем циклом поля формы циклом
        for (var i = 0; i < cells.length; i++) {
            forms_rows[i].textContent=cells[i].textContent;
                // и красим выделенные ячейки
                // кроме последней, там фон по цвету глаз
                for(var j=0; j<cells.length-1; j++){
                cells[j].style.backgroundColor="powderblue";
                }
        }
    }
    
    // запись номера строки в куки
    // но индекс больше на 1 при работе с формой отнимается еденица от индекса
    var row_targ = e.target.closest('tr');//получение строки
    document.cookie = row_targ.rowIndex;// добавление куки для сохранения номера строки
    //alert(document.cookie);// для проверки)
    form_vis.style.display="flex";//показать форму
    greet.style.display="none";// скрыть приветсвие

};


