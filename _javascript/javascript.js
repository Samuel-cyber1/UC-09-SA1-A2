function vformulario() {
                var  vname = document.getElementById("name").value;
                var  vnickname = document.getElementById("nickname").value;
                var  vday = document.getElementById("day").value;
                var  vmonth = document.getElementById("month").value;
                var  vyear = document.getElementById("year").value;
                var  vcpf = document.getElementById("cpf");
                var  vteam_id = document.getElementById("team_id").value;
                var  vResultado = false;
                var listSport = document.getElementsByName("sport"); 
                var  sportArray=[]
                if(listSport[0].checked) {
                    sportArray.push(listSport[0].id);
                }
                if(listSport[1].checked) {
                    sportArray.push(listSport[1].id);
                }
                if(listSport[2].checked) {
                    sportArray.push(listSport[2].id);
                }
                if(listSport[3].checked) {
                    sportArray.push(listSport[3].id);
                }
                if(listSport[4].checked) {
                    sportArray.push(listSport[4].id);
                }
                if(listSport[5].checked) {
                    sportArray.push(listSport[5].id);
                }
                if(listSport[6].checked) {
                    sportArray.push(listSport[6].id);
                    
                }
             
        


            if (vname.length >= 10 && vname.length <= 80) {
                if (vnickname.length >= 2 && vnickname.length <= 20) {
                    if (vday >= 1 && vday <= 31) {
                        if (vmonth >= 1 && vmonth <= 12) {
                            if (vyear >= 1900 && vyear <= 2021) {
                                if (vteam_id != "") {
                                    if ( vcpf.value.length ==14 && vcpf.checkValidity()){
                                        if(sportArray.length> 0){
                                            var  vResultado = true;
                                        }else {
                                            var  vResultado = false;
                                        }
                                         
                                    } else {
                                        var  vResultado = false;
                                    }
                                    
                                } else {
                                    var  vResultado = false;
                                   }

                            } else {
                                var  vResultado = false;
                            }

                        } else {
                            var  vResultado = false;
                        }

                    } else {
                        var  vResultado = false;
                    }

                } else {
                    var  vResultado = false;
                }

            } else {
                var  vResultado = false;
               }

                  document.getElementById("test").innerHTML = vResultado ;
        


    }


    function gJson() {

        var obj_form = {
            name: "",
            nickname: "",
            day: 0,
            month: 0,
            year: 0,
            cpf: "",
            team_id: "",
            sport: [],
        }

        obj_form.name = document.getElementById("name").value;
        obj_form.nickname = document.getElementById("nickname").value;
        obj_form.day = document.getElementById("day").value;
        obj_form.month = document.getElementById("month").value;
        obj_form.year = document.getElementById("year").value;
        obj_form.cpf = document.getElementById("cpf").value;
        obj_form.team_id = document.getElementById("team_id").value;
          
        var listSport = document.getElementsByName("sport"); 

        if(listSport[0].checked) {
            obj_form.sport.push(listSport[0].id);
        }
        if(listSport[1].checked) {
            obj_form.sport.push(listSport[1].id);
        }
        if(listSport[2].checked) {
            obj_form.sport.push(listSport[2].id);
        }
        if(listSport[3].checked) {
            obj_form.sport.push(listSport[3].id);
        }
        if(listSport[4].checked) {
            obj_form.sport.push(listSport[4].id);
        }
        if(listSport[5].checked) {
            obj_form.sport.push(listSport[5].id);
        }
        if(listSport[6].checked) {
            obj_form.sport.push(listSport[6].id);
            
        }
      

        var vJson = JSON.stringify(obj_form);

        document.getElementById("test").innerHTML = vJson;
    }