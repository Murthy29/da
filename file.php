<?php
$file = "textfile.txt";
if (file_exists($file))
{
    echo readfile("textfile.txt");
    copy($file,"newfile.txt");

}
else
{
    echo "file doesn't exists";
}
?>