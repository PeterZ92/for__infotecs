var iter_for_sort=[0,0,0,0];//массив для счетчика кликов по столбцам

// функция для сортировки строк по столбцу
function sort_row(column_index)

{
//для счетчика в цикле, берем кол-во столбцов
var rows_in_table = document.getElementsByClassName("t_inf");
//будущий массив под сортировку для сравнения
var data_f_sort=[];

// переменные для работы с куки-----------------------------------
var data_f_cookie=[];
var coo_row= parseInt(document.cookie);
var cookie_rows = document.getElementsByClassName("t_inf")[coo_row-1];//строки с куки
var row_in_cookie = cookie_rows.textContent;
//alert(row_in_cookie);
// переменные для работы с куки конец----------------------------


//заполняем массив в цикле берет значение ячеек нужного столбца--------------------------------
for (var i = 0; i < rows_in_table.length; i++) {
    //столбец из которого будем брать ячейки
    var rows_in_tab = document.getElementsByClassName("t_inf")[i];
    //ячейки значения которых пишем в массив
    var cells_target = rows_in_tab.getElementsByTagName("td")[column_index];
    //запись в массив
    data_f_sort[i]=cells_target.textContent;
};
//заполняем массив в цикле берет значение ячеек нужного столбца конец----------------------------

// сортировка массива для сравнения 
data_f_sort.sort();
//если остаток деления на 2 не 0, то разворачиваем массив
//работает как счетчик кликов для каждого столбца
//при нажатии плюсует 1 к элементу массива
if(iter_for_sort[column_index]%2!=0)
{   //реверс массива
    data_f_sort.reverse();
}
//---------------------------------------------- цикл перестановки строк в цикле----------
//цикл прогоняет внутренний цикл сортировки 5 раз
//для 10 строк достаночно и 3 раз 
//можно сделать через while
for(var y =0; y<5; y++)
{
//цикл перестановки строк в таблице
//меняем строки в соответствии с сортированным массивом
for(var i = 0; i < data_f_sort.length; i++)
{
    //берем строку по индексу
    var rows_in_tab = document.getElementsByClassName("t_inf")[i];
    //берем ячейку зависит от столбца
    var cells_target = rows_in_tab.getElementsByTagName("td")[column_index];
    //узнаем индекс в массиве по содержимому строки
    var p=data_f_sort.indexOf(cells_target.textContent)
    //создаем массив под индексы
    var rows_rep = document.getElementsByClassName("t_inf")[p];
    //ставим строки в соответсвии с индексами сортированного массива data_f_sort
    rows_in_tab.parentNode.insertBefore(rows_in_tab,rows_rep);
    //alert(data_f_sort[i]+p);
};

    };
//---------------------------------------------- цикл перестановки строк в цикле конец--------

//-------------------------------------------работа с массивом для счета кликов---------------
    // повышаем число на 1 в массиве 
    // повышается только индекс равный индексу столбца
    iter_for_sort[column_index]++;
    //alert(iter_for_sort[column_index]);// для проверки
//-------------------------------------------работа с массивом для счета кликов конец----------

//---------------------- цикл для поиска строки по содержимому для записи в куки----
for (var i = 0; i < rows_in_table.length; i++) {
    var co_rows = document.getElementsByClassName("t_inf")[i];//строки с куки
    var row_in_co = co_rows.textContent;
    data_f_cookie[i]=row_in_co;
};
//---------------------- цикл для поиска строки по содержимому для записи в куки конец----


//----------------------------------переписываем номкр строки в куки------------
var c_str=data_f_cookie.indexOf(row_in_cookie);
//alert(c_str)//проверка
document.cookie=c_str+1;//добавляем еденичку т.к. в одной функции строки считаются 0 а в другой с 1
//----------------------------------переписываем номкр строки в куки конец------
//alert(c_str)//смотрим номер строки для проверки;

};

