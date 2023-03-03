

function get_pendding_history_report(id,project_id,baseUrl)
{

    $.ajax({
        url:baseUrl+'/'+'admin/Get_Pending_History_Report/'+id+'/'+project_id,
        type:"GET",
        success:function(result)
        {
           	console.log(result.username);
          var html = "";
            $.each(result.res,function(key,value)
            {
               
                 html +="<tr>";
                html += '<td>'+value.project_id+'</td>';
				if(value.project_name==null){
                
				 html += '<td>Hostel </td>';
				}else{
					html += '<td>'+value.project_name+'</td>';
				}
                var group = value.approved_usertype.charAt(0)
           		var role = value.approved_usertype.charAt(2)
                             
                    if(group==1)
                {
                    if(role==1)
                    {
                        html += '<td>Admin-[M]</td>';

                    }
                    else if(role ==2)
                    {
                        html += '<td>Admin-[A]</td>';

                    }

                }
                else if(group==2)
                {
                	console.log(role);
                    if(role==1)
                    {
                    html += '<td>Ministry-[M]</td>';
                    }
                    else if(role ==2)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==3)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==4)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==5)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==6)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                }

                else if(group==3)
                {
                	
                    if(role==1)
                    {
                    html += '<td>State-[M]</td>';
                    }
                    else if(role ==2)
                    {
                        html += '<td>State-[A]</td>';
                    }

                }

                else if(group==4)
                {
                    if(role==1)
                    {
                    html += '<td>District-[M]</td>';
                    }
                    else if(role ==2)
                    {
                        html += '<td>District-[A]</td>';
                    }

                }
                else
                {
                    html += '<td></td>';
                }
               
               
               
                var group1 = value.accepted_usertype.charAt(0)
               // console.log(group1);
                var role1 = value.accepted_usertype.charAt(2)
                if(group1==1)
                {
                	
                    if(role1==1)
                    {
                        html += '<td>Admin-[M]</td>';

                    }
                    else if(role1 ==2)
                    {
                        html += '<td>Admin-[A]</td>';

                    }

                }
                else if(group1==2)
                {
                	//console.log(role1);
                    if(role1==1 )
                    {
                    	if(result.pstatus == 0){
							html += '<td>State-[A]</td>';
						}
						else {
						 html += '<td>Ministry-[A]</td>';	
							
						}
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==3)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==4)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==5)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==6)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                }

                else if(group1==3)
                {
                    if(role1==1)
                    {
                    html += '<td>State-[M]</td>';
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>State-[A]</td>';
                    }

                }

                else if(group1==4)
                {
                    if(role1==1)
                    {
                    html += '<td>District-[M]</td>';
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>District-[A]</td>';
                    }

                }
                else
                {
                    html += '<td></td>';

                }
                 if(value.project_status == 1 )
                {
                    html +='<td> <span class="label label-success">Approved</span></td>';
                }
                else if( value.project_status == 2)
                {
                    html +='<td> <span class="label label-danger">Rejected<span></td>';
                }
                else if( value.project_status == 3)
                {
                    html +='<td><span class="label label-warning">Revised</span></td>';
                }
                else
                {
                    html +='<td> </td>';
                }
                   
                // html += '<td>'+value.move_to+'</td>';
               
                 html += '<td>'+datea(value.created_at)+'</td>';
                  html += '<td>'+value.remarks+'</td>';
                html +='</tr>';


            });


            // html +='</tr>';
            // var row=$('#pedding_list_bind').text();

            // if(html==row)
            // {
            //     $('pedding_list_bind').after().remove();
            // }
           // console.log(html);
            $('.pedding_list_bind').html(html);
            $('#project_history').modal('show');
        }
    })
}
function datea(a){
	const dateTime = a;
const parts = dateTime.split(/[- :]/);
const wanted = `  ${parts[2]}/${parts[1]}/${parts[0]} ${parts[3]}:${parts[4]}`;
return wanted;
}


function get_hostel_pendding_history_report(project_id,baseUrl){
    $.ajax({
        url:baseUrl+'/'+'admin/Get_Hostel_Pending_History_Report/'+project_id,
        type:"GET",
        success:function(result)
        {
        // console.log(result.username);
          var html = "";
            $.each(result.res,function(key,value)
            {
                html +="<tr>";
                html += '<td>'+value.project_id+'</td>';
                // html += '<td>'+result.pstatus+'</td>';
				var group = value.approved_usertype.charAt(0)
           		var role = value.approved_usertype.charAt(2)
				
				 var cnu = value.approved_usertype;
				 if(cnu==14.1){
					group=14; 
				 }
				 
                if(value.proposal_type == 1)
                {
                    html += '<td>Sanctioned Hostel</td>';
                }
                else if(value.proposal_type == 2)
                {
                    html += '<td>New Hostel</td>';
                }else
                {
                    html += '<td></td>';
                }
                
                             
                    if(group==1)
                {
                    if(role==1)
                    {
                        html += '<td>Admin-[M]</td>';

                    }
                    else if(role ==2)
                    {
                        html += '<td>Admin-[A]</td>';

                    }

                }
                else if(group==2)
                {
                	console.log(role);
                    if(role==1)
                    {
                    html += '<td>Ministry-[M]</td>';
                    }
                    else if(role ==2)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==3)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==4)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==5)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role ==6)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                }

                else if(group==7)
                {
                	
                    if(role==1)
                    {
                    html += '<td>State-[M]</td>';
                    }
                    else if(role ==2)
                    {
                        html += '<td>State-[A]</td>';
                    }

                }

                else if(group==8)
                {
                    if(role==1)
                    {
                    html += '<td>District-[M]</td>';
                    }
                    else if(role ==2)
                    {
                        html += '<td>District-[A]</td>';
                    }

                }
				else if(group==14)
                {
                    html += '<td>Central University</td>';
                    

                }
				else if(group==13)
                {
                    html += '<td>Central Institute</td>';
                    

                }
                else
                {
                    html += '<td></td>';
                }
               
               
               
                var group1 = value.accepted_usertype.charAt(0)
               // console.log(group1);
                var role1 = value.accepted_usertype.charAt(2)
				var cnu1 = value.accepted_usertype;
				 if(cnu1=='14.1'){
					group1=14; 
				 }
				
				
                if(group1==1)
                {
                	
                    if(role1==1)
                    {
                        html += '<td>Admin-[M]</td>';

                    }
                    else if(role1 ==2)
                    {
                        html += '<td>Admin-[A]</td>';

                    }

                }
                else if(group1==2)
                {
                	//console.log(role1);
                    if(role1==1 )
                    {
                    	if(result.pstatus == 0){
							html += '<td>State-[A]</td>';
						}
                        else if(result.project_status == 4){
                            html +='<td></td>';
                        }
						else {
						 html += '<td>Ministry-[M]</td>';	
							
						}
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==3)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==4)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==5)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                     else if(role1 ==6)
                    {
                        html += '<td>Ministry-[A]</td>';
                    }
                    else if(role1 ==0)
                    {
                        html += '<td></td>';
                    }
                }

                else if(group1==7)
                {
                    
                    if(role1==1)
                    {
                        if (value.project_status ==4) {
                            html += '<td></td>';
                        }else
                    html += '<td>State-[M]</td>';
                    }
                    else if(role1 == 2)
                    {
                        html += '<td>State-[A]</td>';
                    }
                 
                }
                

                else if(group1==8)
                {
                    if(role1==1)
                    {
                    html += '<td>District-[M]</td>';
                    }
                    else if(role1 ==2)
                    {
                        html += '<td>District-[A]</td>';
                    }

                }
				else if(group1==14)
                {
                    html += '<td>Central University</td>';
                    

                }
				else if(group1==13)
                {
                    html += '<td>Central Institute</td>';
                    

                }
                else
                {
                    html += '<td></td>';
                }
                
                 if(value.project_status == 2 )
                {
                    html +='<td> <span class="label label-success">Approved</span></td>';
                }
                else if( value.project_status == 3)
                {
                    html +='<td><span class="label label-warning">Revised</span></td>';
                    
                }
                else if( value.project_status == 4)
                {
                    html +='<td> <span class="label label-danger">Rejected<span></td>';
                    
                }
                else
                {
                    html +='<td> </td>';
                }
                   
                // html += '<td>'+value.move_to+'</td>';
               
                 html += '<td>'+datehostel(value.created_at)+'</td>';
                  html += '<td>'+value.remarks+'</td>';
                html +='</tr>';

            });
            $('.hostel_pedding_list_bind').html(html);
            $('#hostel_history').modal('show');
        }
    })
}
function datehostel(a){
	const dateTime = a;
const parts = dateTime.split(/[- :]/);
const wanted = `  ${parts[2]}/${parts[1]}/${parts[0]} ${parts[3]}:${parts[4]}`;
return wanted;
}
