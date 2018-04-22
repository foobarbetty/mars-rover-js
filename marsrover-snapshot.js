var maxX;
var maxY;
var grid;
var gridY;
var x;
var y;
var str;
var direction;
var degree;
var target;
var index;

function detectLeftdirection()
{
	switch(direction)
	{
		case 'N': direction='W'; break;
		case 'W': direction='S'; break;
		case 'S': direction='E'; break;
		case 'E': direction='N'; break;
	}
	$('#curdir').val(direction);
}

function detectRightdirection()
{
	switch(direction)
	{
		case 'N': direction='E'; break;
		case 'E': direction='S'; break;
		case 'S': direction='W'; break;
		case 'W': direction='N'; break;
	}
	$('#curdir').val(direction);
}

function moveForward()
{
var flag=true;
	$('#'+y.toString()+x.toString()).attr('class','G');
	$('#'+y.toString()+x.toString()).html('');
	switch(direction)
	{
		case 'N': y++; y>gridY?flag=false:flag; break;
		case 'S': y--; y<=0?flag=false:flag; break;
		case 'E': x++; x>gridX?flag=false:flag;break;
		case 'W': x--; x<=0?flag=false:flag;break;
	}
	if(flag)
	{
		showError("Moving Forward",false);
		$('#'+y.toString()+x.toString()).html('<img src="img/arrow-min.png" id="img"/>');
		$('#img').css({
		'-webkit-transform': 'rotate('+degree+'deg)',
		'-moz-transform': 'rotate('+degree+'deg)',
		'-ms-transform': 'rotate('+degree+'deg)',
		'-o-transform': 'rotate('+degree+'deg)',
		'transform': 'rotate('+degree+'deg)'
				});

		}
	else
      	    showError("Cannot move out of Grid",true);
return flag;
}
