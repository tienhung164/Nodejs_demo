       
  
   const getDataAjax = ()=>{
   	    let input={"name":document.getElementById('input').value}
		     $.ajax({
		      type:"GET",
		      url:'/getajax',
		      data:input,
		      dataType:'json',
		      success:(data)=>{
		        console.log(data)
		       }

		     })
		     .done((res)=>{
		        let list=res.mathUsers
		        $('#ul').empty();
		        for(i=0;i<list.length;i++){
		     	$('#ul').append('<li>'+list[i]+ '</li>')}
		     
		     	

		 })

		   };   
    
