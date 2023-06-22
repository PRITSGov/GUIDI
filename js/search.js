let search = false
	$("#search").keypress(function(event){
		let value = $("#search").val().toLowerCase();
		let key = (event.keyCode ? event.keyCode : event.which);
		if(key == 13){
			if($("#search").val()){
			$("#myTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			  });
			  search = true
			if(search){
				$("#openSearch").toggle().hide()
				$("#closeSearch").toggle().show()
			}
			}
			
		}
	})
	$("#openSearch").on("click", function() {
	  let value = $("#search").val().toLowerCase();
	  $("#myTable tr").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		search = true
		if(search){
			
			$("#openSearch").toggle().hide()
			$("#closeSearch").toggle().show()
		}
	  });
	  console.log(search)
	});
	$("#closeSearch").on("click", function() {
		if(search){
			$("#myTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf('') > -1)
			  });
			$("#openSearch").toggle().show()
			$("#closeSearch").toggle().hide()
			document.getElementById('search').value = '';
			document.getElementById('search').focus();
			document.getElementById('search').blur();

		
			
		} else if(!search){
			$("#openSearch").toggle().hide()
			$("#closeSearch").toggle().show()
		}
		
	  });
	  $('.sortButton').click(function() {
		let table, rows, switching, i, x, y, shouldSwitch;
		table = document.getElementById("myTable");
		switching = true;
		/*Make a loop that will continue until
		no switching has been done:*/
		while (switching) {
		  //start by saying: no switching is done:
		  switching = false;
		  rows = table.rows;
		  
		  /*Loop through all table rows (except the
		  first, which contains table headers):*/
		  for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			var orderIndex = $("#order").val()
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[orderIndex];
			y = rows[i + 1].getElementsByTagName("TD")[orderIndex];
			//check if the two rows should switch place:
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
			  //if so, mark as a switch and break the loop:
			  shouldSwitch = true;
			  break;
			}
		  }
		  if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		  }
		}
	  }
	  );