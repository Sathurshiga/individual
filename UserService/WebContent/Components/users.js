$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation-------------------
var status = validateUserForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
// If valid------------------------
var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "Usr",
 type : type,
 data : $("#formUser").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onUserSaveComplete(response.responseText, status);
 }
 });
});

function onUserSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divUsersGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 }
 14
 $("#hidUserIDSave").val("");
 $("#formUser")[0].reset();
}

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{

 $("#hidUserIDSave").val($(this).closest("tr").find('#hidUserIDUpdate').val());
 $("#nid").val($(this).closest("tr").find('td:eq(0)').text());
 $("#nic").val($(this).closest("tr").find('td:eq(1)').text());
 $("#tele").val($(this).closest("tr").find('td:eq(2)').text());
 $("#address").val($(this).closest("tr").find('td:eq(3)').text());
 $("#meterNo").val($(this).closest("tr").find('td:eq(4)').text());
});

//REMOVE==============================
$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "Usr",
 type : "DELETE",
 data : "nid=" + $(this).data("nid"),
 dataType : "text",
 complete : function(response, status)
 {
 onUserDeleteComplete(response.responseText, status);
 }
 });
});

function onUserDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divUsersGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
}

// CLIENT-MODEL================================================================
function validateUserForm()
{
// ID
if ($("#nid").val().trim() == "")
 {
 return "Insert User ID.";
 }
// NIC
if ($("#nic").val().trim() == "")
 {
 return "Insert User NIC.";
 }

// Telephone-------------------------------
if ($("#tele").val().trim() == "")
 {
 return "Insert User telephone No.";
 }
// is numerical value
var tmptele = $("#tele").val().trim();
if (!$.isNumeric(tmptele))
 {
 return "Insert a numerical value for Telephone No.";
 }
// convert to decimal 
 $("#tele").val(parseFloat(tmptele).toFixed(2));
// Address------------------------
if ($("#address").val().trim() == "")
 {
 return "Insert User Address.";
 }
return true;
}
// Meter No------------------------
if ($("#meterNo").val().trim() == "")
 {
 return "Insert Meter No.";
 }
return true;
