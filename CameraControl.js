#pragma strict
public var speed : int = 15;
public var Boundary : int = 50;
private var theScreenWidth : int;
private var theScreenHeight : int;
public var maxHeight : int = 24;
public var minHeight : int =5;

function Start() 
{
    theScreenWidth = Screen.width;
    theScreenHeight = Screen.height;
}

function Update () 
{
    if (Input.GetKey("left shift"))
    {
    	speed = 25;
    }
    if (Input.GetKeyUp ("left shift"))
    {
    	speed = 15;
    }
	if (Input.GetKey ("w")) //+Z Axis
	{
	    //x,y,z
	    var rotatation = transform.eulerAngles.y;
	    rotatation=(rotatation * 3.14159)/180;
		transform.Translate(Mathf.Sin(rotatation) * Time.deltaTime * speed,0,Mathf.Cos(rotatation) * Time.deltaTime * speed, Space.World);
	}
	if (Input.GetKey ("s"))//-Z Axis
	{
		rotatation = transform.eulerAngles.y;
	    rotatation=(rotatation * 3.14159)/180;
		transform.Translate(-1 * Mathf.Sin(rotatation) * Time.deltaTime * speed,0,-1 * Mathf.Cos(rotatation) * Time.deltaTime * speed, Space.World);
    }
 	if (Input.GetKey ("a"))//-X Axis
    {
	    var leftMoveRot = transform.eulerAngles.y;
	    leftMoveRot = leftMoveRot + 90;
	    leftMoveRot=(leftMoveRot * 3.14159)/180;
		transform.Translate(-1 * Mathf.Sin(leftMoveRot) * Time.deltaTime * speed,0,-1 * Mathf.Cos(leftMoveRot) * Time.deltaTime * speed, Space.World);
    }
    if (Input.GetKey ("d"))//+X Axis
    {
	    var rightMoveRot = transform.eulerAngles.y;
	    rightMoveRot = rightMoveRot - 90;
	    rightMoveRot=(rightMoveRot * 3.14159)/180;
		transform.Translate(-1 * Mathf.Sin(rightMoveRot) * Time.deltaTime * speed,0,-1 * Mathf.Cos(rightMoveRot) * Time.deltaTime * speed, Space.World);
    }
	if (Input.GetKey ("z"))//Up
	{
	    if(transform.position.y <= maxHeight)
	    {
	    transform.Translate(0, speed * Time.deltaTime,0,Space.World);
	    }
	}
	if (Input.GetKey ("x"))//Down
	{
	    if (transform.position.y >= minHeight)
	    {
	    transform.Translate(0, -1 * speed * Time.deltaTime,0,Space.World);
	    }
	}
	if (Input.GetKey ("q"))
	{
		transform.Rotate(0,-1 *Time.deltaTime * speed * 5,0,Space.World);
	}
	if (Input.GetKey ("e"))
	{
		transform.Rotate(0,Time.deltaTime * speed * 5,0,Space.World);
	}
	if (Input.GetAxis("Mouse ScrollWheel") < 0)
	{
		transform.Translate(Vector3.back * (speed+10) * Time.deltaTime);
	}
	if (Input.GetAxis("Mouse ScrollWheel") > 0)
	{
		transform.Translate(Vector3.forward * (speed+10) * Time.deltaTime);
	}
	if (Input.mousePosition.x > 0 + Boundary)
	{
		transform.Rotate(0,Time.deltaTime * speed * 5,0,Space.World);
	}
	if (Input.mousePosition.x < theScreenWidth - Boundary)
	{
		transform.Rotate(0,-1 * Time.deltaTime * speed * 5,0,Space.World);
	}
	/*ANIMATION OF OBJECTS!!
	if (Input.GetKey("l"))
	{
		var Player = GameObject.FindGameObjectWithTag("Player");
		Player.animation.Play("run");
		Player.transform.Translate(Vector3.forward * Time.deltaTime * speed);
	}
	*/
	/*UP DOWN ROTATION*
	if (Input.mousePosition.y < 0 + Boundary && Input.mousePosition.x < 0 + Boundary)
	{
		transform.Rotate(1 * Time.deltaTime * speed * 5,0,0,Space.World);
	}
	if (Input.mousePosition.y > theScreenHeight - Boundary)
	{
		transform.Rotate(-1 * Time.deltaTime * speed * 5,0,0,Space.World);
	}
	
	
	*/
}
