// JavaScript Document
function GetObj(objName)
{
	if(document.getElementById)
	{
		return eval('document.getElementById("' + objName + '")');
    }
    else if(document.layers)
    {
		return eval("document.layers['" + objName +"']");
	}
	else
	{
		return eval('document.all.' + objName);
	}
}
var speed=40//速度数值越大速度越慢

GetObj("demo2").innerHTML=GetObj("demo1").innerHTML;
function Marquee()
{
  if(GetObj("demo2").offsetWidth-GetObj("demo").scrollLeft<=0)
      GetObj("demo").scrollLeft-=GetObj("demo1").offsetWidth;
  else
  {
	GetObj("demo").scrollLeft++;
  }
}
var MyMar=setInterval(Marquee,speed);
GetObj("demo").onmouseover=function() {clearInterval(MyMar)};
GetObj("demo").onmouseout=function() {MyMar=setInterval(Marquee,speed)};