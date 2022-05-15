<%@page import="model.Usr"%>
<%@ page import="com.UsrService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/users.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>User Management</h1>
<form id="formItem" name="formItem">
 User ID:
 <input id="itemCode" name="itemCode" type="text"
 class="form-control form-control-sm"><br>
 <br> User NIC:
 <input id="itemName" name="itemName" type="text"
 class="form-control form-control-sm"><br>
 <br> User Telephone:
 <input id="itemPrice" name="itemPrice" type="text"
 class="form-control form-control-sm"><br>
 <br> User Address:
 <input id="itemDesc" name="itemDesc" type="text"
 class="form-control form-control-sm"><br>
 <br> Meter No:
 <input id="itemDesc" name="itemDesc" type="text"
 class="form-control form-control-sm"><br>
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
 <input type="hidden" id="hidItemIDSave"
 name="hidItemIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Usr userObj = new Usr();
 out.print(userObj.readItems());
 %>
</div>
</div> </div> </div>
</body>
</html>