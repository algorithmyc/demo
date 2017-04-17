$(document).ready(function() {
	var table = $('#employeesTable').DataTable({
		//"processing" : true,
		"bServerSide" : true,
		"sAjaxSource" : "/employees",
		"sAjaxDataProp" : "",
		"order" : [ [ 0, "asc" ] ],
		"aoColumns" : [ {
			"mData" : "id"
		}, {
			"mData" : "name"
		}, {
			"mData" : "lastName"
		}, {
			"mData" : "email"
		}, {
			"mData" : "phone"
		} ]
	})
});