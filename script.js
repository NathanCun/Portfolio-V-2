const light = document.getElementById('light');
const dark = document.getElementById('dark');
const body = document.body;

function darkMode(isDark) {
    if(isDark) {
      document.body.setAttribute('id','dark-mode');
      light.style.display="block";
      dark.style.display="none";
    } else {
      document.body.setAttribute('id','');
      light.style.display="none";
      dark.style.display="block";
    }
    
    
  }

  window.onscroll = function() {scrollsFunction()};

  function scrollsFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector("nav").style.boxShadow= "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";

    } else {
      document.querySelector("nav").style.boxShadow= "none";
    }
  }

// if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//   console.log ("berhasil")
//   document.querySelector("nav").style.boxShadow= "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";
// }

function dropdown1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function dropdown3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function scrollFunction(ayam) {
  document.getElementById(ayam).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

if(document.getElementById('home').scrollIntoView(true)) {
  document.getElementsByClassName('ihome')[1].style.color= "yellow"
}

$("input:checkbox").on('click', function() {
  var $check = $(this);
  if ($check.is(":checked")) {
    var group="input:checkbox[name='"+$check.attr("name")+"']";
    $(group).prop("checked", false);
    $check.prop("checked", true);
  } else {
    $check.prop("checked", false);
  }
})

function cb(ayam, bebek){
  console.log('benar')
  document.getElementById('icon1').style.transform= "rotate(0deg)";
  document.getElementById('icon2').style.transform= "rotate(0deg)";
  document.getElementById('icon3').style.transform= "rotate(0deg)";
  document.getElementById(bebek).style.transform= "rotate(180deg)";
}

function modalfunction(bebek) {
  document.getElementById(bebek).style.display= "block";
}

function closeFunction(duck){
  document.getElementById(duck).style.display= "none";
}