// функция сохранения изменений в форме
function save_row(){
    //alert(document.cookie); для проверки куки
    var co_row= parseInt(document.cookie);// получаем текст с куки конвертим в число
    var targ_rows = document.getElementsByClassName("t_inf")[co_row-1];// отнимаем еденичку из разницы начала в нумерации
    var cells = targ_rows.getElementsByTagName("td");
        
//цикл покраски ячеек таблицы  ---------------------------
//всё в белое а цвет глаз по значению в ячейке "цвет глаз"
        for (var i = 0; i < cells.length; i++) {
                //alert(forms_rows[i].value);
                cells[i].textContent=forms_rows[i].value;
                if(i<3)
                {//сброс цвета выделленых ячеек
                        cells[i].style.backgroundColor="white";
                }
                else
                {// обновляем фон для "цвета глаз" 
                        cells[i].style.backgroundColor=forms_rows[i].value;
                }
        }
//---------------------сбросить форму-------------------
        s_form.reset();// сброс формы
        form_vis.style.display="none";//скрыть форму
        greet.style.display="flex";// показать приветсвие
       // alert("Изменения сохранены")
//---------------------сбросить форму-------------------
};