
// Menu

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Menu Accordion


$(document).ready(function(){

    // Validate Form
    $(".addBook").on("click", function(){
        // name
        var title = $("#Title").val();

        if (title == "") {
            $("#TitleError").css("display","block");
        } else {
            $("#TitleError").css("display","none");
        }
        // Summary
        var summary = $("#Summary").val();

        if (summary.trim() == "") {
            $("#SummaryError").css("display","block")
        } else {
            $("#SummaryError").css("display","none")
        }

        // CategoryId
        var categoryId = $("#CategoryId").val();

        if (categoryId == 0) {
            $("#CategoryIdError").css("display","block")
        } else {
            $("#CategoryIdError").css("display","none")
        }

        // Author Id
        var authorId = $("#AuthorId").val();

        if (authorId == 0) {
            $("#AuthorIdError").css("display", "block")
        } else {
            $("#AuthorIdError").css("display", "none")
        }

        // Publisher Id
        var publisherId = $("#PublisherId").val();

        if (publisherId == 0) {
            $("#PublisherIdError").css("display", "block")
        } else {
            $("#PublisherIdError").css("display", "none")
        }

        // Price
        var price = $("#Price").val();

        if(isNaN(price) || price == "") {
            $("#PriceError").css("display","block");
        } else {
            $("#PriceError").css("display","none");
        }

        // So luong
        var quantity = $("#Quantity").val();
        if (isNaN(quantity) || quantity == "") {
            $("#QuantityError").css("display", "block");
        } else {
            $("#QuantityError").css("display", "none");
        }

        // Image
        if ($('#ImgUrl').get(0).files.length === 0) {
            $("#ImgUrlError").css("display","block");
        } else {
            $("#ImgUrlError").css("display","none");
        }

    })

    $(".addCategory").on("click", function(){
        // name
        var title = $("#Title").val();

        if (title == "") {
            $("#TitleError").css("display","block");
        } else {
            $("#TitleError").css("display","none");
        }
        // Summary
        var summary = $("#Summary").val();

        if (summary.trim() == "") {
            $("#SummaryError").css("display","block")
        } else {
            $("#SummaryError").css("display","none")
        }
    });

    $(".addAuthor").on("click", function(){
        // name
        var title = $("#Title").val();

        if (title == "") {
            $("#TitleError").css("display","block");
        } else {
            $("#TitleError").css("display","none");
        }
        // Summary
        var summary = $("#Summary").val();

        if (summary.trim() == "") {
            $("#SummaryError").css("display","block")
        } else {
            $("#SummaryError").css("display","none")
        }
    });

    $(".addPublisher").on("click", function(){
        // name
        var title = $("#Title").val();

        if (title == "") {
            $("#TitleError").css("display","block");
        } else {
            $("#TitleError").css("display","none");
        }
        // Summary
        var summary = $("#Summary").val();

        if (summary.trim() == "") {
            $("#SummaryError").css("display","block")
        } else {
            $("#SummaryError").css("display","none")
        }
    });

});

