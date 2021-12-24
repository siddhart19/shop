var images = ["Screenshot_20210602-00050_WatsAppBusiness.jpeg",
"Screenshot_20210602-000552_WatsAppBusiness.jpeg",
 "Screenshot_20210602-000558_WatsAppBusiness.jpeg" ,
"Screenshot_20210602-000616_WatsAppBusiness.jpeg"
             ];

             var i = 0;
             function updatedimage()
             {
                 i++;
  var number_of_images = 4
                 if(i >number_of_images)
                 {
                     i = 0;
                     var updatedimage = images[i];
                     document.getElementById("furniture").innerHTML=updatedimage();
                 }
                }