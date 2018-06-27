
  var myDB=[{
    'id' :0  ,
    'name' :'name'  ,
    'amount_instock': 'amount_instock',
    'qty' : 'qty',
    'cprice' : 'cprice',
    'sprice': 'sprice',
    'expdate': 'expdate',
    'created_at': 'created_at',
    'updated_at':  'updated_at'
}];
var productIdentifier=1;

function getFormField(id){
    return document.getElementById(id);
}
function getListOfDBContents(){
    return myDB;
    }

function addToDB(){
    var formContents={
        'id' : productIdentifier,
        'name' : getFormField("name").value,
        'amount_instock': getFormField('qty').value,
        'qty' : getFormField('qty').value,
        'cprice' : getFormField('cprice').value,
        'sprice': getFormField('sprice').value,
        'expdate': getFormField('expdate').value,
        'created_at': (new Date()).toDateString(),
        'updated_at': (new Date()).toDateString()
    };

    myDB.push(formContents);
    claerAddForm();
    displayProducts();
    productIdentifier++;
}
function deleteProduct(idOfPrductToDelete){
 
    for(var index in myDB){
        if(myDB[index].id==idOfPrductToDelete){
            myDB.splice(index, 1);
        }
    }

    displayProducts();
}

function editProduct(){
    
    idOfPrductToEdit=getFormField('edit_product_id_ptr').value;
    for(var index in myDB){
        if(myDB[index].id==idOfPrductToEdit){
            myDB[index].name=getFormField("name_toedit").value;
            myDB[index].qty=getFormField("qty_toedit").value;
            myDB[index].amount_instock=getFormField("amount_instock_toedit").value;
            myDB[index].cprice=getFormField("cprice_toedit").value;
            myDB[index].sprice=getFormField("sprice_toedit").value;
            myDB[index].updated_at= (new Date()).toDateString();
            myDB[index].expdate=getFormField("expdate_toedit").value;
        }
    }

    displayProducts();
    loadAddProductForm();
}

function loadProductIntoForm(idOfPrductToEdit){
    for(var index in myDB){
        if(myDB[index].id==idOfPrductToEdit){
            var productToEdit=myDB[index];
            getFormField("name_toedit").value=productToEdit.name;
            getFormField("qty_toedit").value=productToEdit.qty;
            getFormField("amount_instock_toedit").value=productToEdit.amount_instock;
            getFormField("cprice_toedit").value=productToEdit.cprice;
            getFormField("sprice_toedit").value=productToEdit.sprice;
            getFormField("expdate_toedit").value=productToEdit.expdate;
            getFormField("edit_product_id_ptr").value=idOfPrductToEdit;
//display edit form
            getFormField("addForm").style.display='none';
            getFormField("editForm").style.display='block';
            break;

        }
    }


}
function loadAddProductForm(){
    getFormField("addForm").style.display='block';
    getFormField("editForm").style.display='none';  
}
function displayProducts(){
    var products=getListOfDBContents();
    var productsToDisplay="";
        for(var i in  products){
            
            productsToDisplay=productsToDisplay+
               // "<tr><td>"+(parseInt(i)+1)+"</td>"+ 
               "<td>"+products[i].id+"</td>"+
                "<td>"+products[i].name+"</td>"+
                "<td>"+products[i].qty+"</td>"+
                "<td>"+products[i].cprice+"</td>"+
                "<td>"+products[i].sprice+"</td>"+
                "<td>"+products[i].amount_instock+"</td>"+
                "<td>"+products[i].expdate+"</td>"+
                "<td>"+products[i].created_at+"</td>"+
                "<td><button class='btn btn-info' onclick='loadProductIntoForm("+products[i].id+")' type='button' >Edit</button></td>"+
                "<td><button class='btn btn-danger' onclick='deleteProduct("+products[i].id+")' type='button' >Delete</button></td></tr>";
        }
        
    getFormField('tableBody').innerHTML=productsToDisplay;   
}
function claerAddForm(){
    getFormField("name").value="";
    getFormField("qty").value="";
    getFormField("cprice").value="";
    getFormField("sprice").value="";
    getFormField("expdate").value="";
}
