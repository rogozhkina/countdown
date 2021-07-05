function buttonClick ()
      {
        let p = document.getElementById ("trigger");
        let button = document.getElementById ("myButton");
        let content_div = document.getElementById ("info");
      
        if (p.contentEditable == "true")
        {
          p.contentEditable = "false";
          content_div.style.display = "inline";
          
          button.value = "Редактировать";
        }

        else
        {
          p.contentEditable = "true";
          content_div.style.display = "none";
          button.value = "Запустить отсчет";
        }

      }