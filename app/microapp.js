<script>
  window.fcWidget.init({
    token: "ce73e275-a505-4d32-b8ab-dae656c3f258",
    host: "https://wchat.freshchat.com" ,
    open: true ,
  });
</script>
<script>
var Ayoba = getAyoba()
 
/**
* Determine the mobile operating system and returns the
* proper javascript interface
*/
function getAyoba() {
   var userAgent = navigator.userAgent || navigator.vendor || window.opera;
 
   // Windows Phone must come first because its UA also contains "Android"
   if (/windows phone/i.test(userAgent)) {
       return null;
   }
 
   if (/android/i.test(userAgent)) {
       return Android;
   }
 
   // iOS detection from: http://stackoverflow.com/a/9039885/177710
   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
       return null; // todo
   }
 
   return "unknown";
}
</script>


