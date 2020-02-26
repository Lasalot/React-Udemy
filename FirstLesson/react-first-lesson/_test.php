<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html lang="nl">
<head>

<title>Le Guinot</title>

<META name="description" CONTENT="Vakantiewoning Le Guinot Dordogne">
<meta name="author"      content="Artez">
<meta name="keywords"    content="Le Guinot chambres d'hotes dordogne" />
<META name="dc.title"    CONTENT="www.leguinot.be">
<META name="dc.subject"  CONTENT="">
<META name="robots"      CONTENT="index">

</head>

<link href="css/general.css" rel="stylesheet" type="text/css">

<script language=javascript>
function goLang(id){

  activepage = "keuze.html";

  if (id == 'nl')
    window.parent.location.href = id + "/" + activepage;
  else if (id == 'fr')
    window.parent.location.href = id + "/" + activepage;
  else if (id == 'en')
    window.parent.location.href = id + "/" + activepage;
  else
    alert("Language not yet supported.");
}
</script>

<body>

<div>

  <table width="100%" height="90%">
    <tr>
      <td align=center>
    	<img border='0' src='./images/indextop.jpg'><br><br>
    	<img border='0' src='./images/index.jpg' usemap='#map'>
      </td>
    </tr>
  </table>
</div>

<map name='map'>
    <area shape='rect' id='langen' coords='155,395,270,426'   title='Nederlands'      href='javascript:goLang("nl");' />
    <area shape='rect' id='langfr' coords='276,395,390,426'   title='English'         href='javascript:goLang("en");' />
    <area shape='rect' id='langne' coords='397,395,511,426'   title='Fran&ccedil;ais' href='javascript:goLang("fr");' />
</map>

</body>

</html>
